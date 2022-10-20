const AuthModule = {
    namespaced: true,
    state: {
        user: {
            token: localStorage.getItem('token'),
            role: localStorage.getItem('role')
        },
    },
    getters: {
    },
    mutations: {
        setUserRole(state, role) {
            state.user.role = role
        },

        setUserToken(state, token) {
            state.user.token = token
        },
    },
    actions: {
    },
}

export default AuthModule