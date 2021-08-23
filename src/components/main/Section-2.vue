<template>
    <section class="section">
        <h2 class="section__heading">
            {{title}}
        </h2>
        <div class="section__wrap">
            <video class="section__video" src="../../assets/video.mp4" autoplay
                   poster="../../assets/img_beef_tablet.jpg" muted controls>
            </video>
            <div class="section__textContainer">
                <p class="section__supText">
                    {{msg.supName}}
                </p>
                <h3 class="section__subheading">
                    {{msg.subTitle}}
                </h3>
                <p class="section__desc">
                    {{msg.desc}}
                </p>

                <router-link class="section__button" to="/reservation">
                    {{msg.buttonText}}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Section-2",
    data(){
        return{
            title : 'WELCOME TO HAPPY PLACE',
            msg : {
                supName : '행복펜션',
                subTitle : 'watch the video',
                desc : '친구, 가족, 동료들과 여행하며 쉬기 좋은 공간,' +
                    '특별한 여행, 특별한 날 소중한 사람들과 잊을 수 없는' +
                    '추억 만들어보세요.',
                buttonText : '예약하러 가기'
            }

        }
    }
}
</script>

<style scoped>
    .section
    {
        min-height: calc(100vh);
        /* Header 영역 매꾸기*/
        padding-top : 100px;
        background-color: #444;
    }
    .section__heading
    {
        text-align: center;
        font-size: 4rem;
        color : #fff;
        letter-spacing: 4px;
        text-shadow: 1px 1px 2px #fff;
        user-select: none;
    }
    .section__wrap
    {
        width: 1440px;
        margin : 0 auto;
        overflow: hidden;
    }

/*    Video */
    .section__video
    {
        float: left;
        width: 45%;

        margin-top : 12rem;
    }
    .section__textContainer
    {
        float : right;
        width: 45%;

        margin-top: 12rem;
        font-size: 1.6rem;
    }

    .section__supText
    {
        font-size: 1.2em;
        letter-spacing: 4px;
    }
    .section__subheading
    {
        font-size: 2.4em;
        text-transform: uppercase;
        letter-spacing: 5px;
    }
    .section__desc
    {
        margin-top: 1em;
        margin-bottom: 3em;
        font-size: 1.8rem;
        line-height: 2;
        width: 75%;
    }
    .section__button
    {
        display: inline-block;
        color : white;

        padding : 1em 4em;
        border: 1px solid #fff;
        border-radius: 2.5rem;
        font-weight: bold;
        letter-spacing: 5px;
    }
</style>
