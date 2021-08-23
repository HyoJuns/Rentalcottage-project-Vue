<template>
    <div class="card">
        <div class="card__side card__front">
            <h3 class="card__title">
                {{dataList.title}}
            </h3>
            <p class="card__description">
                {{dataList.desc}}
            </p>
            <button class="card__open">
                자세히 보기
            </button>
        </div>
        <div class="card__side card__back">
            <ul class="card__textList">
                <li class="card__item">
                    타입 : {{dataList.type.type}}
                </li>
                <li class="card__item">
                    성수기 : {{dataList.type.price[0]}} 원
                </li>
                <li class="card__item">
                    비성수기 : {{dataList.type.price[1]}} 원
                </li>
                <li class="card__item">
                    기준 / 최대 : {{dataList.type.minPeople}}/{{dataList.type.maxPeople}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardModal",
    props : ['dataList'],

}
</script>

<style scoped>
.card
{
    width: 250px;
    height: 260px;
    /*outline: 1px solid red;*/
    padding : 1rem;

    position: relative;

    border-radius: 10px;

    box-shadow: .1rem .1rem .1rem #1DC5E2, .2rem .2rem .2rem #1badc6;
    transform: perspective(500px) rotateY(0);
    transform-style: preserve-3d;

}
.card__title
{
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 5px;
    padding-top: 1rem;
    color : #ffffff;
}

.card__description
{
    font-size: 1.6rem;
    font-weight: 500;
    padding-bottom: 1rem;
    padding-top: 1rem;
    color : #e2c12b;
}
.card__open
{
    margin-top: 4rem;
    padding: 2.4rem 6rem;
    font-size: 1.6rem;
    font-weight: bold;
    outline: none;
    border: 1px solid #1DC5E2;
    border-radius: 3rem;
    background-color: transparent;
    cursor: pointer;
    color : #1DC5E2;
    opacity: 1;
    transform: scale(1);
    transition: all .5s ease;

}
.card__open:hover
{
    opacity: .8;
    transform: scale(0.98);
}

.card__side
{
    position : absolute;
    left : 0;
    top : 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    background-repeat: no-repeat;
    background-size: cover;
}

.card__front
{
    z-index: 2;
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    border-radius: 1rem;
}

.card__back
{
    background-color: #444;
    border-radius: 1rem;
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}

@keyframes reverse {
    0%
    {
        transform: perspective(500px) rotateY(0deg);
    }
    100%
    {
        transform: perspective(500px) rotateY(-180deg);
    }
}
</style>
