<template>
  <div id="login">
    <div v-if="!isLogged">
      <div v-show="!loginShow" class="login-button">
        <button @click="openLogin">Login</button>
      </div>
      <div v-show="loginShow" class="login__modal-wrapper">
        <div @click="closeLogin" class="login__modal-background"></div>
        <div class="login__modal box">
          <label><span>Login:</span><input type="text" v-model="loginData.login"></label>
          <label><span>Password:</span><input type="password" v-model="loginData.password"></label>
          <div class="login__modal-button">
            <button @click="login">Login</button>
          </div>
          <div v-if="errors && errors.length" class="errors"><div v-for="error in errors">{{ error }}</div></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="login__logged">
        <div class="login__user-info">
          <span>{{ currentUser }}</span>
        </div>
        <div><button @click="logout">Logout</button></div>
        <div v-if="isAdmin" class="login__admin-btn">
          <button @click="switchToAdmin">{{ switchToAdminBtnText.current }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                loginShow: false,
                loginData: {
                    login: "",
                    password: ""
                },
                errors: [],
                switchToAdminBtnText: {
                    index: "To admin page",
                    admin: "To homepage",
                    current: ""
                }
            }
        },
        methods: {
            openLogin() {
                this.loginShow = true
            },
            closeLogin() {
                this.loginShow = false
                this.loginData = {
                    login: "",
                    password: ""
                }
            },
            login() {
                this.errors = []
                if(this.loginData.login && this.loginData.password) {
                    this.$store.dispatch('login', this.loginData)
                        .then((res, rej) => {
                            if(res.login) {
                                this.errors = []
                                this.loginShow = false
                                this.$store.state.loggedUser = {
                                    login: res.login,
                                    admin: res.admin
                                }
                                this.switchToAdmin(res.admin);
                            } else {
                                this.errors.push(res.message)
                            }
                        })
                } else {
                    if(!this.loginData.login) {
                        this.errors.push("Please, fill login.")
                    }
                    if(!this.loginData.password) {
                        this.errors.push("Please, fill password.")
                    }
                }
            },
            logout() {
                this.$store.dispatch('logout')
                    .then((res, rej) => {
                        if(res.status) {
                            this.$store.state.loggedUser = null
                            this.$router.push({ name: 'index'})
                        }
                    })
            },
            switchToAdmin(event, admin) {
                const params = (this.$router.history.current.name == "index" || admin) ? {
                    text: this.switchToAdminBtnText.admin,
                    route: 'admin'
                } : {
                    text: this.switchToAdminBtnText.index,
                    route: 'index'
                }
                this.switchToAdminBtnText.current = params.text
                this.$router.push({ name: params.route})
            }
        },
        computed: {
            isLogged() {
                return this.$store.state.loggedUser
            },
            currentUser() {
                return this.$store.state.loggedUser.login
            },
            isAdmin() {
                return this.$store.state.loggedUser.admin
            }
        }
    }
</script>

<style lang="scss">
  #login {
    display: flex;
    justify-self: center;
    align-self: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .login {

    &__modal {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      background: #fff;
      padding: 20px;
      width: 320px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      &-wrapper {
        position: relative;
        height: 100vh;
        width: 100vw;
        min-width: 100vw;
      }

      &-background {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.15);
        -webkit-filter: blur(5px);
        filter: blur(5px);
      }

      &-button {
        margin-top: 10px;
        display: flex;
        justify-content: center;
      }

      label {
        width: 100%;
        display: flex;
        padding: 10px 0;

        span {
          width: 35%;
          display: flex;
          align-items: center;
        }

        input {
          width: 65%;
        }
      }
    }

    &-button {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__logged {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__user-info {
      margin-right: 15px;
    }

    &__admin-btn {
      margin-left: 25px;
    }
  }
</style>