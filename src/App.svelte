<script>
  import User from './lib/User.svelte';
  import Attribution from './lib/Attribution.svelte';
  import QuotationImage from './assets/bg-pattern-quotation.svg';
  import Avatar1 from './assets/image-daniel.jpg';
  import Avatar2 from './assets/image-jonathan.jpg';
  import Avatar3 from './assets/image-jeanette.jpg';
  import Avatar4 from './assets/image-patrick.jpg';
  import Avatar5 from './assets/image-kira.jpg';
</script>

<main class="flex items-center relative justify-center min-h-screen">
  <!-- grid container -->
  <div
    class="grid desktop:grid-cols-4 gap-8 mx-8 my-16 max-w-sm desktop:max-w-7xl grid-cols-1"
  >
    <!-- Daniel Clifford -->
    <article
      class="rounded-lg relative p-8 col-start-1 -z-20 desktop:col-span-2 bg-_moderate-violet flex flex-col justify-between shadow-xl"
    >
      <User color="light" name="Daniel Clifford" image={Avatar1} borderGray />

      <img
        src={QuotationImage}
        alt=""
        class="absolute top-4 right-8 desktop:right-24 desktop:scale-125 -z-10"
      />

      <h1 class="text-white text-2xl font-semibold mt-4">
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny's worth.
      </h1>

      <p class="text-white/50 tracking-wide mt-8">
        “ I was an EMT for many years before I joined the bootcamp. I've been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I've successfully switched careers, working as a Software
        Engineer at a VR startup. ”
      </p>
    </article>

    <!-- Jonathan Walters -->
    <article
      class="bg-_very-dark-grayish-blue rounded-lg p-8 shadow-xl flex flex-col justify-between"
    >
      <User color="light" name="Jonathan Walters" image={Avatar2} />

      <h1 class="text-white text-2xl font-semibold mt-4">
        The team was very supportive and kept me motivated
      </h1>

      <p class="text-white/50 tracking-wide mt-8">
        “ I started as a total newbie with virtually no coding skills. I now
        work as a mobile engineer for a big company. This was one of the best
        investments I've made in myself. ”
      </p>
    </article>

    <!-- Jeanette Harmon -->
    <article
      class="bg-white flex flex-col justify-between rounded-lg p-8 col-start-1 shadow-xl"
    >
      <User color="dark" name="Jeanette Harmon" image={Avatar3} />

      <h1 class="text-2xl font-semibold text-_very-dark-grayish-blue mt-4">
        An overall wonderful and rewarding experience
      </h1>

      <p class="text-_very-dark-grayish-blue/50 tracking-wide mt-8">
        “ Thank you for the wonderful experience! I now have a job I really
        enjoy, and make a good living while doing something I love.”
      </p>
    </article>

    <!-- Patrick Abrams -->
    <article
      class="bg-_very-dark-blackish-blue flex flex-col justify-between rounded-lg p-8 desktop:col-start-2 desktop:col-span-2 shadow-xl"
    >
      <User color="light" name="Patrick Abrams" image={Avatar4} borderPurp />

      <h1 class="text-white text-2xl font-semibold mt-4">
        Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy.
      </h1>

      <p class="text-white/50 tracking-wide mt-8">
        “ The staff seem genuinely concerned about my progress which I find
        really refreshing. The program gave me the confidence necessary to be
        able to go out in the world and present myself as a capable junior
        developer. The standard is above the rest. You will get the personal
        attention you need from an incredible community of smart and amazing
        people. ”
      </p>
    </article>

    <!-- Kira Whittle -->
    <article
      class="bg-white flex flex-col justify-between rounded-lg p-8 desktop:col-start-4 desktop:row-start-1 desktop:row-span-2 shadow-xl"
    >
      <User color="dark" name="Kira Whittle" image={Avatar5} />

      <h1 class="text-2xl text-_very-dark-grayish-blue font-semibold mt-4">
        Such a life-changing experience. Highly recommended!
      </h1>

      <p class="text-_very-dark-grayish-blue/50 tracking-wide mt-8">
        “ Before joining the bootcamp, I've never written a line of code. I
        needed some structure from professionals who can help me learn
        programming step by step. I was encouraged to enroll by a former student
        of theirs who can only say wonderful things about the program. The
        entire curriculum and staff did not disappoint. They were very hands-on
        and I never had to wait long for assistance. The agile team project, in
        particular, was outstanding. It took my learning to the next level in a
        way that no tutorial could ever have. In fact, I've often referred to it
        during interviews as an example of my developent experience. It
        certainly helped me land a job as a full-stack developer after receiving
        multiple offers. 100% recommend!”
      </p>
    </article>
  </div>

  <!-- attribution footer -->
  <Attribution />
</main>
