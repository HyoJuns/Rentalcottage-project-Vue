<template>
    <section class="section">
        <div class="section__wrap">
            <h1 class="section__heading">
                {{title}}
            </h1>
        </div>

        <div class="section__scrollContainer">
            <span class="section__scroll section__scroll--left"></span>
            <span class="section__scroll section__scroll--right"></span>
            <p class="section__scrollName">
                scroll
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "Section-1",
    data (){
        return {
            title : 'The Happy Pension',

        }
    }
}
</script>

<style scoped>
    .section
    {
        width: 100vw;
        height: 100vh;
        background-image: url("../../assets/bg.png");
        background-repeat: no-repeat;
        background-size: cover;

        position : relative;
    }
    .section::before
    {
        content: '';
        width: 100vw;
        height: 100vh;
        position : absolute;

        top : 0;
        left :0;
        background-color: rgba(0,0,0,.5);
        z-index: 0;
    }
    .section__wrap
    {
        width : 1440px;
        height: inherit;
        margin : 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .section__heading
    {
        position : relative;
        font-size: 5.6rem;
        color : white;

        text-shadow: 1px 1px 15px #fff, 1px 1px 1px #222;
        letter-spacing: 5px;
        user-select: none;
    }

    .section__scrollContainer
    {
        position : absolute;

        bottom : 6rem;
        left : 50%;
        transform: translate(-50%,0);
        z-index: 1;
    }

    .section__scrollName
    {
        color : white;
        font-size: 1.8rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;
        user-select: none;
    }

    .section__scroll
    {
        width: 3rem;
        height: .4rem;
        display: inline-block;
        position : absolute;
        background-color: white;
        z-index: 1;
        bottom: -2rem;

    }
    .section__scroll--left
    {
        left : 2.5rem;
        transform: translate(-50%,0) rotate(45deg);

        border-radius: 5px 0 0 5px;
    }
    .section__scroll--right
    {
        left : 4.6rem;
        transform: translate(-50%,0) rotate(-45deg);

        border-radius: 5px 0 0 5px;
    }
</style>
