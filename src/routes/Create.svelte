<script>
  import { supabase } from '../supabase'
  import { goto } from '$app/navigation'

  let workoutName, workoutType, exercises
  let loading = false

  const addWorkout = async () => {
    console.log(workoutName, workoutType)
    try {
      const { data, error } = await supabase
        .from('workouts')
        .insert([{ workoutName, workoutType, exercises }])
      goto('/')
      console.log(error)
      return data
    } catch (error) {
      console.log(error)
    }
  }
</script>

<section class="max-w-sm mx-auto mt-5">
  <h2 class="text-3xl text-center pt-10 font-bold">Create Workout</h2>
  <form class="flex flex-col" on:submit|preventDefault={addWorkout}>
    <label for="workoutName" class="font-bold pt-5">Workout Name</label>
    <input
      type="text"
      name="workoutname"
      class="bg-gray-200 border-1 h-10 rounded p-2"
      required
      bind:value={workoutName}
    />
    <label for="workoutType" class="font-bold pt-2">Workout Type</label>
    <input
      type="text"
      name="workoutType"
      class="bg-gray-200 border-1 h-10 rounded p-2"
      required
      bind:value={workoutType}
    />

    <label for="exercises" class="font-bold pt-2">Exercises</label>
    <textarea
      type="text"
      name="exercises"
      class="bg-gray-200 border-1 h-72 rounded p-2 resize-none"
      required
      bind:value={exercises}
    />

    <input
      type="submit"
      class="h-10 px-6 mt-3 font-semibold rounded-md bg-black text-white"
      value={loading ? 'Loading' : 'Create Workout'}
      disabled={loading}
    />
  </form>
</section>
