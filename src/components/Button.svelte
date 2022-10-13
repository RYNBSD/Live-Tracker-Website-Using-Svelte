<script>
    export let text = "";
    export let transparent = false;
</script>

<button class="btn" class:makeTransparent={transparent}>
    {text}
    <box-icon name='chevron-right' color="white"></box-icon>
</button>

<style>
    .btn {
        width: 189px;
        height: 44px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        background-color: #EB0065;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
    }
    .makeTransparent {
        background-color: transparent;
        border: 3px solid #fff;
    }
</style>