<script>

    import { Steps } from 'svelte-steps';
    import { onMount } from 'svelte';
    import cookie from 'cookie';

    import Gender from '../../templates/configuratorShares/gender.svelte';
    import HairColor from '../../templates/configuratorShares/hairColor.svelte';
    import EyeColor from '../../templates/configuratorShares/eyeColor.svelte';
    import Name from '../../templates/configuratorShares/name.svelte';
    import Profession from '../../templates/configuratorShares/profession.svelte';
    import Result from '../../templates/configuratorShares/result.svelte';
    import Navigation from '../../templates/navigation.svelte';
    
    let steps = [
        {text: 'Gender'},
        {text: 'Hair Color'},
        {text: 'Eye Color'},
        {text: 'Name'},
        {text: 'Profession'},
        {text: 'Result'}
    ];

    /**
     * @type {number}
     */
    let current = 0;

    let character = {
      gender: '',
      hairColor: '',
      eyeColor: '',
      name: '',
      profession: ''
    };

    onMount(async () => {
        loadCharacter();
    })

    async function loadCharacter() {
        const cookies = cookie.parse(document.cookie);
        const jwt = cookies['jwt'];
        try {
            const response = await fetch('http://localhost:8000/authorize/character', {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `${jwt}`
                }
            });
            const data = await response.json();
            
            if(!data.message) {
                character = data;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function saveSetting() {
        const cookies = cookie.parse(document.cookie);
        const jwt = cookies['jwt'];
        try {
            const response = await fetch('http://localhost:8000/authorize/character', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `${jwt}`
                },
                body: JSON.stringify(character)
            });
            const data = await response.json();
            character = data;
        } catch (e) {
            console.log(e);
        }
    }

    function resetCharacter(){
        character.gender = '';
        character.hairColor = '';
        character.eyeColor = '';
        character.name = '';
        character.profession = '';

        current = 0;
        saveSetting();
    }

    // @ts-ignore
    const handleSteps = (e) => {

        switch (e.detail.config){
            case 'gender':
                character.gender = e.detail.gender;

            case 'hair':
                character.hairColor = e.detail.hairColor;

            case 'eye':
                character.eyeColor = e.detail.eyeColor;

            case 'name':
                character.name = e.detail.name;

            case 'profession':
                character.profession = e.detail.profession;
        }
        
        saveSetting();
        current = e.detail.current;
    }
    
  </script>
  <Navigation></Navigation>

  <Steps on:click={handleSteps} {steps} {current} />
  <div class="reset"><button class="resetButton btn btn-danger" type="button" on:click={resetCharacter}>Reset Character</button></div>
    
  {#if current === 0}
  <Gender title={'Gender Selection'} gender={character.gender} on:click={handleSteps} />

  {:else if current === 1}
  <HairColor title={'Hair Color Selection'} gender={character.gender} hairColor={character.hairColor} eyeColor={character.eyeColor} on:click={handleSteps} />

  {:else if current === 2}
  <EyeColor title={'Eye Color Selection'} gender={character.gender} hairColor={character.hairColor} eyeColor={character.eyeColor} on:click={handleSteps} />

  {:else if current === 3}
  <Name title={'Enter Charakter Name'} name={character.name} on:click={handleSteps} />

  {:else if current === 4}
  <Profession title={'Choose a Class'} profession={character.profession} on:click={handleSteps} />

  {:else}
  <Result title={'Configuration Result'} gender={character.gender} hairColor={character.hairColor} eyeColor={character.eyeColor} name={character.name} profession={character.profession} />

  {/if}

<style>
    .reset{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
</style>