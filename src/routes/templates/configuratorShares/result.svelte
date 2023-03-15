<script>
    import { createEventDispatcher } from 'svelte';

    export let title = 'Selection';

    /**
    * @type {string}
    */
    export let gender;

    /**
    * @type {string}
    */
    export let hairColor;

    /**
    * @type {string}
    */
    export let eyeColor;

    /**
    * @type {string}
    */
    export let name;

    /**
    * @type {string}
    */
    export let profession;

</script>

<div class="container">
    <div class="title">
      <h1>{ title }</h1>
    </div>
  
    <div class="result">
        {#if gender === 'Female'}
            {#if hairColor === 'Blue'}
                {#if eyeColor === 'Blue'}
                    <div>
                        <img src='/female-blue-blue.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {:else}
                    <div>
                        <img src='/female-blue-brown.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {/if}
            {:else}
                {#if eyeColor === 'Blue'}
                    <div>
                        <img src='/female-blonde-blue.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {:else}
                    <div>
                        <img src='/female-blonde-brown.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {/if}
            {/if}
        {:else}
            {#if hairColor === 'Blue'}
                {#if eyeColor === 'Blue'}
                    <div>
                        <img src='/male-blue-blue.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {:else}
                    <div>
                        <img src='/male-blue-brown.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {/if}
             {:else}
                {#if eyeColor === 'Blue'}
                    <div>
                        <img src='/male-blond-blue.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {:else}
                    <div>
                        <img src='/male-blond-brown.png' alt=''>
                        <p>Name : {name}</p>
                        <p>Class : {profession}</p>
                    </div>
                {/if}
            {/if}
        {/if}
    </div>
</div>

<style>
    .result {
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
</style>