<script>
    import { createEventDispatcher } from 'svelte';

    export let title = 'Selection';

     export let profession = '';

    const dispatch = createEventDispatcher();

    function handleNext() {
        dispatch('click', {
            config: 'profession',
            current: 5,
            last: 4,
            profession : profession
        });
    }

    function handlePrevious() {
        dispatch('click', {
            config: 'profession',
            current: 3,
            last: 4,
            profession : profession
        });
    }

</script>

<div class="container">
    <div class="title">
      <h1>{ title }</h1>
    </div>
    
    <div class="radioRow">
        <label>
            <input type=radio bind:group={profession} name="profession" value={'Warrior'}>
            Warrior
        </label>
    </div>
    <div class="radioRow">
        <label>
            <input type=radio bind:group={profession} name="profession" value={'Mage'}>
            Mage
        </label>
    </div>

    <div class="nextStep">
        <button type="button" class="btn btn-primary" on:click={handlePrevious}>Previous Step</button>
        <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
    </div>
  </div>

<style>
    .radioRow {
        padding-top: 30px;
        display: flex;
        justify-content: center;
    }
    .container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .nextStep {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 100px;
  }
</style>