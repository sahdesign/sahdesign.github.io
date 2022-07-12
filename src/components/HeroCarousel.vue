<template>
    <div>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            indicators
            fade
        >
            <b-carousel-slide
                caption="83 Main St"
                text="New Office - Master's Touch Design • Build"
                img-src="img/Enscape-2022-05-10-14-06-00-LogoReduced.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                caption="6 Wilson Rd"
                text="Exterior Remodel - Private Residence"
                img-src="img/Enscape-2022-06-23-17-32-45.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="200 Causeway St"
                text="Relocated Post & Beam Barn"
                img-src="img/Enscape-2021-08-14-12-08-07.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                caption="250 Main St"
                text="The Circle at Coachlace Place - 3-Story Apt Design"
                img-src="img/The-Circle-AT-Coachplace-final.jpg"
            >
            </b-carousel-slide>
            <b-carousel-slide
                caption="32 High St Extension"
                text="Basement Renovation - Private Residence"
                img-src="img/Pages-from-32HighStExtension-Ashland-FinalBasementDesignPlan.jpg"
            >
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import '../resources/images/projects/83-Main-St-Medway-MA-New-Office/Enscape-2022-05-10-14-06-00-LogoReduced.jpg';
    import '../resources/images/projects/6-Wilson-Rd-Northborough-MA-Exterior-Remodel/Enscape-2022-06-23-17-32-45.jpg';
    import '../resources/images/projects/200-Causeway-St-Millis-MA-Relocated-Post-and-Beam-Barn/Enscape-2021-08-14-12-08-07.jpg';
    import '../resources/images/projects/250-Main-St-3-Story-Apartment-Design-Clinton-MA/The-Circle-AT-Coachplace-final.jpg';
    import '../resources/images/projects/High-St-Extension-Ashland-MA-Basement-Renovation/Pages-from-32HighStExtension-Ashland-FinalBasementDesignPlan.jpg';

    export default {
        name: 'HeroCarousel',
    }
  
</script>