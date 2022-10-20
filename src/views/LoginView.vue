<template>
<NavBar />

<div class="auth-content">
    <form>
        <h2 class="form-title">Login</h2>
        <div>
            <label>Email</label>
            <input type="email" class="text-input">
        </div>
        <div>
            <label>Password</label>
            <input type="password" class="text-input">
        </div>
        <div>
            <button type="button" class="btn btn-big">Login</button>
        </div>
        <p>Or <router-link to="/register">Register</router-link>
        </p>
    </form>
</div>
</template>
