<script>
  import { supabase } from '../lib/supabase'
  import { goto } from '$app/navigation'

  let workoutName, workoutType, description, exercises
  let loading = false

  const addWorkout = async () => {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .insert([{ workoutName, workoutType, description, exercises }])
      goto('/')
      console.log(error)
      return data
    } catch (error) {
      console.log(error)
    }
  }
</script>

<section class="max-w-sm mx-auto my-5">
  <h2 class="text-2xl text-center pt-10 font-bold">💪 Create A Workout</h2>
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
    <!-- <input
      type="text"
      name="workoutType"
      class="bg-gray-200 border-1 h-10 rounded p-2"
      required
      bind:value={workoutType}
    /> -->

    <select
      class="bg-gray-200 border-1 rounded p-2"
      name="workoutType"
      id="workoutType"
      bind:value={workoutType}
    >
      <option
        value="Strength Training"
        class="bg-gray-200 border-1 h-10 rounded p-2"
        selected>Strength Training</option
      >
      <option
        value="Cardio Training"
        class="bg-gray-200 border-1 h-10 rounded p-2">Cardio Training</option
      >
    </select>

    <label for="description" class="font-bold pt-2">Description</label>
    <input
      type="text"
      name="description"
      class="bg-gray-200 border-1 rounded p-2"
      required
      bind:value={description}
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
