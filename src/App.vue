<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active"  aria-current="page" to="/">Home</router-link>
          
           
        </li>
         <li class="nav-item">
          <router-link class="nav-link active" v-if = "isLoggedIn" aria-current="page" to="/feed">Feed</router-link>
        </li>
          <li class="nav-item">
          <router-link class="nav-link active" v-if = "isNotLoggedIn" aria-current="page" to="/register">Register</router-link>
        </li>
          <li class="nav-item">
          <router-link class="nav-link active" v-if = "isNotLoggedIn" aria-current="page" to="/signin">Login</router-link>
        </li>
     
     
      </ul>
    
       
        <button @click ="handleSignOut" v-if = "isLoggedIn" class="btn btn-outline-success" >Log Out</button>
     
    </div>
  </div>
</nav>
  <router-view/>
</template>


<script setup>

    import { onMounted, ref } from "vue";
    import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";
    import { useRouter} from "vue-router";

    const router = useRouter();
    const isLoggedIn = ref(false);
    const isNotLoggedIn = ref(true);
  

    let auth;
    onMounted(() =>{
      auth = getAuth ();
      
      onAuthStateChanged(auth,(user) =>{

        if (user){
          isLoggedIn.value = true;
          isNotLoggedIn.value = false;
        }
        else{
          isLoggedIn.value =  false;
          isNotLoggedIn.value = true;
        }

      });

    });

    const handleSignOut = () => {

      signOut(auth).then(()=>{

        router.push("/");

      });

    };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

