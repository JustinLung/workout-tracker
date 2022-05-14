<script>
  import { supabase } from "../supabase";


  const addWorkout = async () => {

  };    const formData = new FormData(e.target);
    const { data, error } = await supabase.from("workouts").insert({
      workoutName: formData.get("workout-name"),
      workoutType: formData.get("workout-type"),
      exercises: formData.get("exercise-name"),
    });
</script>

<section class="max-w-screen-md mx-auto px-4 py-10">
  <div class="p-5 flex items-start bg-light-grey rounded-md shadow-lg">
    <form
      class="flex flex-col gap-y-5 w-full"
      on:submit|preventDefault={addWorkout}
    >
      <h2 class="text-2xl text-blue-900 font-bold">Record Workout</h2>
      <div class="flex flex-col">
        <label for="workout-name" class="mb-1 text-sm text-blue-900"
          >Workout Name</label
        >
        <input
          type="text"
          required
          class="p-2 text-gray-500 focus:outline-none border rounded"
          id="workout-name"
          placeholder="Enter Workout Name..."
        />

        <label for="workout-type" class="mt-2 mb-1 text-sm text-blue-900"
          >Workout Type</label
        >
        <select
          id="workout-type"
          class="p-2 text-gray-500 focus:outline-none border rounded"
        >
          <option value="select-workout"> Select Workout </option>
          <option value="strength"> Strength Training </option>
          <option value="cardio"> Cardio </option>
        </select>
      </div>
      <input
        type="submit"
        class="h-10 px-6 mt-3 font-semibold rounded-md bg-black text-white"
      />
    </form>
  </div>
</section>
