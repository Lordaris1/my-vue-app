<template>
 <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <div class="row g-3">
                        <h4>Welcome Back</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="text"  class="form-control"  placeholder="Email" v-model="email" >
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password"  class="form-control"   placeholder="Password" v-model="password" >
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="rememberMe">
                                <label class="form-check-label" for="rememberMe"> Remember me</label>
                            </div>
                        </div>
                       
                        <div class="col-12" style="text-align: center;">
                            <button @click="register" class="btn btn-dark ">Register</button>
                        </div>
                            <div class="col-12" style="text-align: center;">
                            <button  @click="signInWithGoogle" class="btn btn-dark ">Sign In With Google</button>
                        </div>
                        
                    </div>
                    <hr class="mt-4">
                  
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>

        import { ref } from "vue";
        import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
        import { useRouter } from "vue-router";

        const email = ref("");
        const password = ref("");
        const router = useRouter();

        const register = () =>{
            const auth = getAuth()
            createUserWithEmailAndPassword(getAuth(),email.value,password.value)
            .then((data) =>{
                console.log("Successfully Registered!");
                // console.log(auth.currentUser)
                // router.push('/feed')

            })
            .catch((error) =>{
                console.log(error.code);
                alert(error.message);
            });

        };
        const signInWithGoogle = () =>{
            const provider = new  GoogleAuthProvider();
            signInWithPopup(getAuth(),provider)
            .then((result) =>{
                console.log(result.user);
                router.push("/feed");

            }).catch((error)=>{

            });

        };

</script>

