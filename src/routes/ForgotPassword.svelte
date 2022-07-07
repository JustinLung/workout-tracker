<script>
  import { supabase } from '$lib/supabase.js'

  let loading = false
  let email, new_password
  let message = { succes: null, display: '' }

  const handlePasswordReset = async () => {
    try {
      const { data, error } = await supabase.auth.api
        .resetPasswordForEmail(email)
        .updateUser(access_token, { password: new_password })
    } catch (err) {
      console.log(err)
    }
  }
</script>

<h2 class="text-2xl mt-10 font-bold text-center md:text-3xl">
  Reset Your Password
</h2>

<div class="max-w-sm mx-auto mt-5">
  <form class="flex flex-col" on:submit|preventDefault={handlePasswordReset}>
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      class=" bg-gray-200 border-1 h-10 rounded p-2"
      placeholder="Your email"
      bind:value={email}
    />
    <label for="password">New Password</label>
    <input
      type="password"
      name="password"
      class=" bg-gray-200 border-1 h-10 rounded p-2"
      placeholder="New Password"
      bind:value={new_password}
    />
    <input
      type="submit"
      class="h-10 px-6 mt-3 font-semibold rounded-md bg-black text-white"
    />
    <p class="pt-2 text-center">
      Don't have an account yet? <a href="/Register" class="text-blue-900"
        >Sign Up</a
      >
    </p>
  </form>
</div>
