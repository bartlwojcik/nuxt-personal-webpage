<template>
  <SideDrawer name="nav-drawer">
    <template slot-scope="{ closeDrawer }">
      <ul class="px-8 py-4 text-3xl font-medium font-body">
        <li class="py-2">
          <NavButton
            :active="activeSection === 'home'"
            @clicked="closeDrawer"
            target="#home"
          >
            Home
          </NavButton>
        </li>
        <li class="py-2">
          <NavButton
            :active="activeSection === 'about'"
            @clicked="closeDrawer"
            target="#about"
          >
            About me
          </NavButton>
        </li>
        <li class="py-2">
          <NavButton
            :active="activeSection === 'experience'"
            @clicked="closeDrawer"
            target="#experience"
          >
            My experience
          </NavButton>
        </li>
        <li class="py-2">
          <NavButton
            :active="activeSection === 'contact'"
            @clicked="closeDrawer"
            target="#contact"
          >
            Contact me
          </NavButton>
        </li>
      </ul>
    </template>
  </SideDrawer>
</template>

<script>
import SideDrawer from '@/components/SideDrawer'
import NavButton from '../NavButton'

export default {
  name: 'NavDrawer',
  components: {
    SideDrawer,
    NavButton
  },
  props: {
    activeSection: {
      type: String,
      required: true
    }
  }
}
</script>
