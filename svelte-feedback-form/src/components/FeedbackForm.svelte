<script>
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";

    let text = '';
    let rating = 10;
    let btnDisabled = true;
    let threshhold = 10;
    let message = '';

    const handleInput = () => {
        if (text.trim().length <= threshhold){
            message = `Minimum of ${threshhold} characters`;
            btnDisabled = true;
        }
        else{
            message = null;
            btnDisabled = false;
        }
    }
</script>

<Card>
    <header>
        <h2>RATE ME???</h2>
    </header>
    <form>
        <div class="input-group">
            <input 
            on:input={handleInput}
            bind:value={text} 
            type="text"
            placeholder="we are DESPERATE for ur review">
            
            <Button type="disabled" disabled={btnDisabled}>Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
    }
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>