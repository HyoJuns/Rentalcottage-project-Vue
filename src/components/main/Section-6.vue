<template>
    <section class="section">
        <div class="section__wrap">
            <h2 class="section__heading">
                {{ title }}
            </h2>
            <p class="section__subheading">
                {{ subTitle }}
            </p>
            <div class="section__imageContainer">
                <figure class="section__iamge">
                    <img src="../../assets/near_travel_02.jpg" alt="Travel" />
                    <figcaption>
                        정원
                    </figcaption>
                </figure>
                <figure class="section__iamge">
                    <img src="../../assets/near_travel_04.jpg" alt="Trave2" />
                    <figcaption>
                        저택
                    </figcaption>
                </figure>
                <figure class="section__iamge">
                    <img src="../../assets/near_travel_06.jpg" alt="Trave3" />
                    <figcaption>
                        오솔길
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Section-6",
    data() {
        return {
            title: "near travel",
            subTitle: "근처 여행시설"
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
.section__imageContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    margin-top: 8rem;
    gap: 1rem;
}
.section__iamge {
    width: 33%;
    position: relative;
}
.section__wrap {
    width: 1440px;
    margin: 0 auto;
}
.section__iamge > img {
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
