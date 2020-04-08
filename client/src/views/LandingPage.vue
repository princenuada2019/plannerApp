<template>
  <div>
    <div class="hero-section section-padding">
      <app-hero-section></app-hero-section>
    </div>
    <div class="feature-section section-padding">
      <app-features></app-features>
    </div>
    <div class="planning-section section-padding">
      <app-planning-des></app-planning-des>
    </div>
    <div class="notification-section section-padding">
      <app-notification-des></app-notification-des>
    </div>
    <div class="analyze-section section-padding">
      <app-analyze-des></app-analyze-des>
    </div>
    <div class="final-talks-section section-padding">
      <app-final-talk-section></app-final-talk-section>
    </div>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import HeroSection from '@/components/landingPage/HeroSection'
import Features from '@/components/landingPage/Features'
import PlanningDes from '@/components/landingPage/PlanningDes'
import NotificationDes from '@/components/landingPage/NotificationDes'
import AnalyzeDes from '@/components/landingPage/AnalyzeDes'
import FinalTalkSection from '@/components/landingPage/FinalTalkSection'
import Footer from '@/components/landingPage/Footer'

export default {
  components: {
    appHeroSection: HeroSection,
    appFeatures: Features,
    appPlanningDes: PlanningDes,
    appNotificationDes: NotificationDes,
    appAnalyzeDes: AnalyzeDes,
    appFinalTalkSection: FinalTalkSection,
    appFooter: Footer
  }
}
</script>

<style scoped lang='scss'>
  @import '../assets/css/style.scss';
  .hero-section {
    background-image: url('~@/assets/images/hero-section-background.svg');
    background-size: 68%;
  }
  .section-padding {
    padding: 100px 0;
  }
  footer {
    background-color: #324047;
  }

  @media (max-width: 959px) {
    .section-padding {
      padding: 40px 0;
    }
  }

  @media (max-width: 600px) {
    .hero-section {
      background-size: 110%;
    }
  }
</style>
