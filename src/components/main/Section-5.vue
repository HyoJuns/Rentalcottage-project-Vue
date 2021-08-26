<template>
    <section class="section">
        <div class="section__wrap">
            <h2 class="section__heading">
                {{ title }}
            </h2>
            <p class="section__subheading">
                {{ subTitle }}
            </p>
            <div class="section__flexlayout">
                <figure class="section__image">
                    <img src="../../assets/img_beef_desktop.jpg" alt="바베큐" />
                    <figcaption>
                        바베큐
                    </figcaption>
                </figure>
                <figure class="section__image section__image--half">
                    <img
                        src="../../assets/img_fallwater_tablet.jpg"
                        alt="폭포"
                    />
                    <figcaption>
                        근처계곡
                    </figcaption>
                </figure>
                <figure class="section__image section__image--half">
                    <img src="../../assets/img_water_tablet.jpg" alt="수영장" />
                    <figcaption>
                        수영장
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Section-5",
    data() {
        return {
            title: "facilities",
            subTitle: "행복펜션 부대시설"
        };
    }
};
</script>

<style scoped>
.section {
    padding-top: 100px;
    height: 100vh;
    background-color: #444;
    text-align: center;
}
.section__wrap {
    width: 1440px;
    margin: 0 auto;
}
.section__heading {
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: white;
}
.section__subheading {
    font-size: 2rem;
    letter-spacing: 8px;
    color: white;
}
.section__flexlayout {
    width: 100%;
    height: 500px;
    margin-top: 8rem;

    overflow: hidden;
}
.section__image {
    width: 50%;
    height: 100%;
    /* outline: 1px solid tomato; */
    position: relative;
    float: left;
    padding: 1rem;
}
.section__image--half {
    height: 50%;
    /* outline: 1px solid rgb(79, 185, 29); */
}
.section__image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
}

figcaption {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    color: #fff;
    font-size: 4rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px #222, 0 0 20px violet;
}
</style>
