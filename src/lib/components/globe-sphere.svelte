<!-- <script lang="ts">
    import { onMount, onDestroy } from'svelte';
    import createGlobe from 'cobe';
  
    let canvas: HTMLCanvasElement;
    let globe: any;
    let phi: number = 0;
    let disabledWebGL: boolean = false;
  
    onMount(() => {
      if (!canvas) return;
      if (!isWebGLContext()) {
        disabledWebGL = true;
        return;
      }
  
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 350 * 2,
        height: 350 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [1, 1, 1],
        glowColor: [1, 1, 1],
        markers: [
          // AMS
          { location: [52.3676, 4.9041], size: 0.05 },
          // IAD
          { location: [39.0438, -77.4874], size: 0.05 },
          // JNB
          { location: [-26.2041, 28.0473], size: 0.05 },
          // HKG
          { location: [22.3193, 114.1694], size: 0.05 },
          // SYD
          { location: [-33.8688, 151.2093], size: 0.05 },
          // GRU
          { location: [-23.5558, -46.6396], size: 0.05 },
        ],
        onRender: (state: any) => {
          if (true) {
            state.phi = phi;
            phi += 0.003;
          }
        },
      });
  
      setTimeout(() => {
        canvas.style.opacity = '1';
      }, 0);
    });
  
    onDestroy(() => {
      if (globe) globe.destroy();
    });
  
    function isWebGLContext(): boolean {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return gl instanceof WebGLRenderingContext;
    }
  </script>
  
  {#if disabledWebGL}
    <div class="flex items-center justify-center">
      <p class="text-muted-foreground text-sm">
        <span class="font-semibold">Hint</span>: enable <span class="font-semibold">WebGL</span> to render the globe.
      </p>
    </div>
  {:else}
    <div class="flex justify-center">
        <div class="w-[300px] h-[300px]">

            <div class="flex justify-center">
                <canvas
                  bind:this={canvas}
                  style={{
                    width: 200,
                    height: 200,
                    maxWidth: '100%',
                    aspectRatio: 1,
                    opacity: 0,
                    transition: 'opacity 1s ease',
                    borderRadius: '50%',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>
        </div>
     
    </div>
  {/if} -->

<div>TODO Stupid Globe</div>
