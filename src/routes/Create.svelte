<script>
  let workoutName
  let workoutType
  let exercises
  let message
  let errorMessage

  const handleFillForm = async () => {}

  console.log(workoutName)
</script>

<section class="max-w-screen-md mx-auto px-4 py-10">
  <div class="p-5 flex items-start bg-light-grey rounded-md shadow-lg">
    <form
      class="flex flex-col gap-y-5 w-full"
      on:submit|preventDefault={handleFillForm}
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
          bind:value={workoutName}
        />

        <label for="workout-type" class="mt-2 mb-1 text-sm text-blue-900"
          >Workout Type</label
        >
        <select
          id="workout-type"
          class="p-2 text-gray-500 focus:outline-none border rounded"
          bind:value={workoutType}
        >
          <option value="select-workout"> Select Workout </option>
          <option value="strength"> Strength Training </option>
          <option value="cardio"> Cardio </option>
        </select>

        {#if workoutType === 'strength'}
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row">
            {#each (item, index) as excercises}
              <div class="flex flex-col md:w-1/3">
                <label for="exercise-name" class="mb-1 text-sm text-blue-900"
                  >Exercise</label
                >
                <input
                  required
                  class="p-2 w-full text-gray-500 focus:outline-none"
                  type="text"
                />
              </div>
            {/each}
          </div>
        {/if}
      </div>
      <input
        type="submit"
        class="h-10 px-6 mt-3 font-semibold rounded-md bg-black text-white"
      />
    </form>
  </div>
</section>
