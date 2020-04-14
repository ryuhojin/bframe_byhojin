<template>
  <div class="container-fluid p-0">
    <div>
      <span></span>
    </div>
    <SignInForm />
  </div>
</template>
<script>
import SignInForm from "../components/common/SignInForm";
export default {
  name: "SignIn",
  components: {
    SignInForm
  }
};
</script>
