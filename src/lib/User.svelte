<script lang="ts">
  import clsx from 'clsx';

  export let name: string;
  export let role = 'Verified Graduate';
  export let image: string;
  export let color: 'light' | 'dark';
  export let borderGray = false;
  export let borderPurp = false;

  // apply light & dark text color styles
  let nameStyle: string;
  let roleStyle: string;

  $: color === 'light'
    ? (nameStyle = 'text-white')
    : (nameStyle = 'text-_very-dark-blackish-blue');
  $: color === 'dark'
    ? (roleStyle = 'text-_very-dark-blackish-blue/50')
    : (roleStyle = 'text-white/50');
</script>

<div class="flex gap-4 items-center">
  <img
    src={image}
    alt={name}
    height="48"
    width="48"
    class={clsx(
      'rounded-full box-content',
      borderGray && 'border-[3px] border-_light-gray/50',
      borderPurp && 'border-[3px] border-_moderate-violet/70'
    )}
  />
  <div>
    <p class={clsx('text-xl font-semibold', nameStyle)}>{name}</p>
    <p class={clsx(roleStyle)}>{role}</p>
  </div>
</div>
