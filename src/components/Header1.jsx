// import React from "react";
import React, { useEffect , useState  , useRef } from 'react';

import ScrollTrigger from 'gsap/dist/ScrollTrigger'; // ScrollTrigger ko import karein
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);







    function Header() {
      const iconRef = useRef(null);
    
    const cursorRef = useRef(null);
    useEffect(() => {
      if (iconRef.current) {
        const iconAnimation = gsap.fromTo(
          iconRef.current,
          { x: 0 },
          { x: 200, duration: 5, ease: 'power1.inOut' }
        );
  
        ScrollTrigger.create({
          trigger: iconRef.current,
          animation: iconAnimation,
          scrub: 0.5,
          toggleActions: 'start resume complete complete'
        });
      }
    }, []);
  return (
    <div    ref={cursorRef} className="icon-container"  >

    <svg
      ref={iconRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1728"
      height="694"
      fill="none"
      viewBox="0 0 1728 694"
      className="icon"
    >
        
      <g clipPath="url(#clip0_38_579)">
        <path
          fill="#2D3C65"
          fillOpacity="0.6"
          fillRule="evenodd"
          d="M-94 319.2v94.2h347.5v188.4h695V225H1296v188.4h347.5v47.1H1991V696H-94V319.2z"
          clipRule="evenodd"
        ></path>
        <path
          stroke="#E95A0C"
          strokeWidth="2"
          d="M601 601.8H253.5V413.4H-94v-94.2V696m695-94.2v0zm0 0h347.5V225H1296v188.4h347.5v47.1H1991V696h-347.5m0 0v0zm0 0H1296m0 0v0zm0 0H948.5m0 0v0zm0 0H601m0 0v0zm0 0H253.5m0 0v0zm0 0H-94m0 0v0z"
        ></path>
        <path
          fill="#fff"
          d="M798.473 366.028v-1.779a11.658 11.658 0 01-1.978-.19 7.888 7.888 0 01-1.554-.466v-1.84c.443.208.99.395 1.641.562.65.166 1.281.261 1.891.285v-3.239c-.835-.282-1.514-.575-2.038-.88-.518-.305-.898-.659-1.14-1.062-.242-.409-.362-.898-.362-1.468 0-.588.146-1.091.44-1.511.299-.426.714-.763 1.243-1.011.536-.247 1.155-.394 1.857-.44v-1.408h1.122v1.382a8.786 8.786 0 011.771.216 8.348 8.348 0 011.562.509l-.63 1.606a9.92 9.92 0 00-2.703-.647v3.16c.703.23 1.327.478 1.874.743.553.265.985.598 1.295 1.001.317.398.475.919.475 1.563 0 .847-.311 1.546-.932 2.099-.622.546-1.526.875-2.712.984v1.831h-1.122zm1.122-3.498c.553-.069.965-.213 1.235-.431.271-.225.406-.516.406-.872 0-.242-.058-.447-.173-.614-.109-.166-.285-.316-.526-.449a5.356 5.356 0 00-.942-.388v2.754zm-1.122-5.146v-2.703a2.758 2.758 0 00-.846.208 1.201 1.201 0 00-.518.405 1.019 1.019 0 00-.173.596c0 .254.052.469.155.648.104.178.268.334.492.466.231.133.527.259.89.38zm11.264-.276c.811 0 1.525.147 2.141.44a3.272 3.272 0 011.451 1.278c.345.558.518 1.243.518 2.055 0 .887-.187 1.652-.562 2.297-.374.639-.923 1.131-1.649 1.477-.725.345-1.609.518-2.651.518a9.463 9.463 0 01-1.856-.173 5.126 5.126 0 01-1.477-.518v-1.831c.432.242.95.441 1.555.596.604.15 1.182.225 1.735.225.587 0 1.091-.087 1.511-.259.42-.173.743-.438.967-.795.231-.357.346-.809.346-1.355 0-.726-.233-1.284-.7-1.676-.46-.397-1.183-.595-2.167-.595-.345 0-.714.031-1.105.095-.386.057-.708.12-.967.189l-.89-.526.475-6.174h6.563v1.787H808.2l-.277 3.143c.207-.046.455-.089.743-.129a6.957 6.957 0 011.071-.069zm14.907 1.571c0 1.019-.08 1.932-.242 2.738-.155.8-.403 1.479-.742 2.037-.34.559-.783.985-1.33 1.278-.547.294-1.209.441-1.986.441-.973 0-1.776-.256-2.409-.769-.633-.518-1.103-1.26-1.408-2.228-.305-.972-.457-2.138-.457-3.497 0-1.358.138-2.521.414-3.488.282-.973.737-1.719 1.364-2.237.628-.518 1.46-.777 2.496-.777.979 0 1.784.259 2.418.777.639.513 1.111 1.255 1.416 2.228.311.967.466 2.133.466 3.497zm-6.528 0c0 1.065.069 1.955.207 2.668.144.714.38 1.25.708 1.607.329.351.766.526 1.313.526.547 0 .984-.175 1.312-.526.329-.352.565-.884.709-1.598.149-.714.224-1.606.224-2.677 0-1.059-.072-1.945-.216-2.659-.144-.714-.38-1.249-.708-1.606-.328-.363-.768-.544-1.321-.544-.553 0-.993.181-1.321.544-.323.357-.556.892-.7 1.606-.138.714-.207 1.6-.207 2.659zm17.179 0c0 1.019-.081 1.932-.242 2.738-.156.8-.403 1.479-.743 2.037a3.443 3.443 0 01-1.329 1.278c-.547.294-1.209.441-1.986.441-.973 0-1.776-.256-2.41-.769-.633-.518-1.102-1.26-1.407-2.228-.305-.972-.458-2.138-.458-3.497 0-1.358.138-2.521.415-3.488.282-.973.737-1.719 1.364-2.237.628-.518 1.459-.777 2.496-.777.978 0 1.784.259 2.417.777.639.513 1.111 1.255 1.416 2.228.311.967.467 2.133.467 3.497zm-6.528 0c0 1.065.069 1.955.207 2.668.144.714.38 1.25.708 1.607.328.351.766.526 1.313.526.546 0 .984-.175 1.312-.526.328-.352.564-.884.708-1.598.15-.714.225-1.606.225-2.677 0-1.059-.072-1.945-.216-2.659-.144-.714-.38-1.249-.708-1.606-.328-.363-.769-.544-1.321-.544-.553 0-.993.181-1.322.544-.322.357-.555.892-.699 1.606-.138.714-.207 1.6-.207 2.659zm11.332 4.266l.121.199c-.103.414-.236.86-.397 1.338-.161.478-.337.955-.527 1.433-.19.484-.382.939-.578 1.365h-1.485c.121-.467.236-.956.345-1.468.115-.507.219-1.008.311-1.503.098-.501.176-.955.233-1.364h1.977zm11.195-4.266c0 1.019-.081 1.932-.242 2.738-.155.8-.403 1.479-.742 2.037-.34.559-.783.985-1.33 1.278-.547.294-1.209.441-1.986.441-.973 0-1.776-.256-2.409-.769-.633-.518-1.103-1.26-1.408-2.228-.305-.972-.457-2.138-.457-3.497 0-1.358.138-2.521.414-3.488.282-.973.737-1.719 1.364-2.237.628-.518 1.46-.777 2.496-.777.979 0 1.784.259 2.418.777.639.513 1.111 1.255 1.416 2.228.311.967.466 2.133.466 3.497zm-6.528 0c0 1.065.069 1.955.207 2.668.144.714.38 1.25.708 1.607.329.351.766.526 1.313.526.547 0 .984-.175 1.312-.526.329-.352.565-.884.708-1.598.15-.714.225-1.606.225-2.677 0-1.059-.072-1.945-.216-2.659-.144-.714-.38-1.249-.708-1.606-.328-.363-.768-.544-1.321-.544-.553 0-.993.181-1.321.544-.323.357-.556.892-.7 1.606-.138.714-.207 1.6-.207 2.659zm17.179 0c0 1.019-.081 1.932-.242 2.738-.156.8-.403 1.479-.743 2.037a3.443 3.443 0 01-1.329 1.278c-.547.294-1.209.441-1.986.441-.973 0-1.776-.256-2.41-.769-.633-.518-1.102-1.26-1.407-2.228-.305-.972-.458-2.138-.458-3.497 0-1.358.138-2.521.415-3.488.282-.973.737-1.719 1.364-2.237.627-.518 1.459-.777 2.496-.777.978 0 1.784.259 2.417.777.639.513 1.111 1.255 1.416 2.228.311.967.467 2.133.467 3.497zm-6.528 0c0 1.065.069 1.955.207 2.668.144.714.38 1.25.708 1.607.328.351.766.526 1.313.526.546 0 .984-.175 1.312-.526.328-.352.564-.884.708-1.598.15-.714.225-1.606.225-2.677 0-1.059-.072-1.945-.216-2.659-.144-.714-.38-1.249-.708-1.606-.328-.363-.769-.544-1.321-.544-.553 0-.994.181-1.322.544-.322.357-.555.892-.699 1.606-.138.714-.207 1.6-.207 2.659zm17.178 0c0 1.019-.08 1.932-.242 2.738-.155.8-.402 1.479-.742 2.037-.34.559-.783.985-1.33 1.278-.547.294-1.209.441-1.986.441-.973 0-1.776-.256-2.409-.769-.633-.518-1.102-1.26-1.408-2.228-.305-.972-.457-2.138-.457-3.497 0-1.358.138-2.521.414-3.488.282-.973.737-1.719 1.365-2.237.627-.518 1.459-.777 2.495-.777.979 0 1.785.259 2.418.777.639.513 1.111 1.255 1.416 2.228.311.967.466 2.133.466 3.497zm-6.528 0c0 1.065.069 1.955.208 2.668.143.714.379 1.25.708 1.607.328.351.765.526 1.312.526s.984-.175 1.313-.526c.328-.352.564-.884.708-1.598.149-.714.224-1.606.224-2.677 0-1.059-.072-1.945-.216-2.659-.144-.714-.38-1.249-.708-1.606-.328-.363-.768-.544-1.321-.544-.553 0-.993.181-1.321.544-.322.357-.556.892-.699 1.606-.139.714-.208 1.6-.208 2.659z"
        ></path>
        <path
          fill="#C3C3C3"
          d="M798.469 376.773c.885 0 1.591.304 2.117.913.527.609.79 1.524.79 2.746 0 .807-.121 1.485-.362 2.033-.242.548-.583.963-1.024 1.244-.436.28-.952.421-1.547.421-.376 0-.706-.05-.991-.149a2.362 2.362 0 01-.732-.402 2.625 2.625 0 01-.505-.55h-.078l.045.608c.022.238.033.445.033.622v2.914h-1.082v-10.271h.888l.142 1.049h.052c.138-.216.306-.412.505-.589.199-.181.44-.324.725-.427a2.93 2.93 0 011.024-.162zm-.188.906c-.492 0-.89.095-1.192.285-.298.19-.516.475-.654.855-.138.376-.212.848-.22 1.418v.208c0 .6.065 1.107.194 1.521.134.415.352.73.654.946.307.216.717.324 1.231.324.44 0 .807-.119 1.101-.356.293-.238.511-.568.654-.991.147-.428.22-.918.22-1.47 0-.838-.164-1.503-.492-1.995-.324-.496-.823-.745-1.496-.745zm11.491 2.759c0 .583-.075 1.103-.226 1.561-.151.458-.37.844-.654 1.159a2.847 2.847 0 01-1.037.725 3.584 3.584 0 01-1.366.247c-.475 0-.911-.083-1.308-.247a2.957 2.957 0 01-1.024-.725 3.363 3.363 0 01-.667-1.159 4.856 4.856 0 01-.233-1.561c0-.777.132-1.438.395-1.982.264-.548.639-.965 1.127-1.249.492-.29 1.077-.434 1.755-.434.648 0 1.213.144 1.697.434.488.289.866.708 1.133 1.256.272.544.408 1.202.408 1.975zm-5.401 0c0 .57.076 1.064.227 1.483.151.419.384.743.699.972.315.228.721.343 1.218.343.492 0 .896-.115 1.211-.343.319-.229.555-.553.706-.972.151-.419.226-.913.226-1.483 0-.565-.075-1.053-.226-1.463-.151-.415-.385-.734-.7-.959-.315-.224-.723-.337-1.224-.337-.738 0-1.28.244-1.625.732-.341.488-.512 1.164-.512 2.027zm9.95 2.811c.177 0 .359-.015.544-.046.186-.03.337-.066.454-.11v.836a2.29 2.29 0 01-.525.142c-.22.039-.436.059-.647.059a2.6 2.6 0 01-1.024-.195 1.589 1.589 0 01-.738-.673c-.181-.315-.272-.752-.272-1.308v-4.21h-1.01v-.525l1.016-.42.428-1.542h.648v1.645h2.078v.842h-2.078v4.177c0 .445.101.777.304.997.207.221.481.331.822.331zm5.566-6.476c.605 0 1.123.133 1.555.401.431.268.762.643.99 1.127.229.479.344 1.04.344 1.684v.667h-4.903c.013.833.22 1.468.622 1.904.401.436.967.654 1.697.654a5.18 5.18 0 001.191-.123 6.517 6.517 0 001.075-.363v.946a5.24 5.24 0 01-1.068.349c-.35.074-.764.111-1.244.111-.682 0-1.278-.139-1.787-.415a2.907 2.907 0 01-1.179-1.23c-.28-.54-.421-1.201-.421-1.982 0-.764.128-1.425.382-1.982.259-.561.622-.993 1.088-1.295.471-.302 1.024-.453 1.658-.453zm-.013.88c-.574 0-1.032.188-1.373.564-.341.375-.544.9-.608 1.574h3.756a3.033 3.033 0 00-.201-1.114 1.563 1.563 0 00-.576-.752c-.259-.181-.592-.272-.998-.272zm8.487-.88c.842 0 1.479.207 1.91.621.432.41.648 1.071.648 1.982V384h-1.062v-4.553c0-.591-.136-1.034-.408-1.327-.268-.294-.68-.441-1.237-.441-.786 0-1.338.223-1.658.667-.319.445-.479 1.09-.479 1.937V384H825v-7.098h.868l.161 1.023h.059c.151-.25.343-.459.576-.628a2.49 2.49 0 01.784-.388 3.02 3.02 0 01.913-.136zm7.463 6.476c.177 0 .359-.015.544-.046.186-.03.337-.066.454-.11v.836c-.126.056-.3.103-.525.142a3.71 3.71 0 01-.648.059c-.375 0-.716-.065-1.023-.195a1.589 1.589 0 01-.738-.673c-.181-.315-.272-.752-.272-1.308v-4.21h-1.01v-.525l1.016-.42.428-1.542h.647v1.645h2.079v.842h-2.079v4.177c0 .445.102.777.305.997.207.221.481.331.822.331zm3.908-6.347V384h-1.075v-7.098h1.075zm-.524-2.655c.177 0 .328.058.453.175.13.112.194.289.194.531 0 .237-.064.414-.194.531a.643.643 0 01-.453.175.663.663 0 01-.467-.175c-.12-.117-.181-.294-.181-.531 0-.242.061-.419.181-.531a.659.659 0 01.467-.175zm5.857 2.539c.846 0 1.474.19 1.885.569.41.38.615.987.615 1.82V384h-.784l-.207-1.049h-.052a3.911 3.911 0 01-.622.654 2.301 2.301 0 01-.751.395c-.28.086-.626.13-1.036.13-.432 0-.816-.076-1.153-.227a1.793 1.793 0 01-.79-.687c-.19-.306-.285-.695-.285-1.165 0-.708.281-1.252.842-1.632.561-.38 1.416-.587 2.565-.622l1.224-.052v-.434c0-.613-.132-1.042-.395-1.288-.264-.247-.635-.37-1.114-.37a3.45 3.45 0 00-1.062.162 7.369 7.369 0 00-.959.382l-.33-.816a5.926 5.926 0 011.101-.421c.414-.116.85-.174 1.308-.174zm1.438 3.717l-1.082.045c-.885.035-1.509.179-1.871.434-.363.255-.544.615-.544 1.082 0 .405.123.706.369.9.246.194.572.291.978.291.63 0 1.146-.175 1.547-.524.402-.35.603-.875.603-1.574v-.654zm4.756 3.497h-1.081v-10.077h1.081V384zm9.739-7.227c.143 0 .292.008.447.026.156.012.294.032.415.058l-.136.997a3.392 3.392 0 00-.79-.097 1.92 1.92 0 00-.81.175c-.25.112-.471.276-.66.492a2.29 2.29 0 00-.447.771c-.108.298-.162.63-.162.997V384h-1.082v-7.098h.894l.117 1.308h.045a3.51 3.51 0 01.531-.719 2.38 2.38 0 01.719-.524c.276-.13.583-.194.919-.194zm5.333 0c.605 0 1.123.133 1.554.401.432.268.762.643.991 1.127.229.479.343 1.04.343 1.684v.667h-4.902c.013.833.22 1.468.622 1.904.401.436.967.654 1.696.654.449 0 .847-.041 1.192-.123a6.549 6.549 0 001.075-.363v.946a5.24 5.24 0 01-1.068.349c-.35.074-.765.111-1.244.111-.682 0-1.278-.139-1.787-.415a2.907 2.907 0 01-1.179-1.23c-.281-.54-.421-1.201-.421-1.982 0-.764.127-1.425.382-1.982.259-.561.622-.993 1.088-1.295.471-.302 1.023-.453 1.658-.453zm-.013.88c-.574 0-1.032.188-1.373.564-.341.375-.544.9-.609 1.574h3.757a3.054 3.054 0 00-.201-1.114 1.56 1.56 0 00-.577-.752c-.259-.181-.591-.272-.997-.272zm6.686 6.347l-2.694-7.098h1.153l1.561 4.294c.108.293.218.617.33.971.112.354.19.639.233.855h.046c.051-.216.138-.501.259-.855.12-.358.231-.682.33-.971l1.561-4.294h1.152l-2.7 7.098h-1.231zm8.202-7.227c.604 0 1.123.133 1.554.401.432.268.762.643.991 1.127.229.479.343 1.04.343 1.684v.667h-4.902c.013.833.22 1.468.622 1.904.401.436.967.654 1.696.654.449 0 .847-.041 1.192-.123a6.549 6.549 0 001.075-.363v.946a5.24 5.24 0 01-1.068.349c-.35.074-.765.111-1.244.111-.682 0-1.278-.139-1.787-.415a2.907 2.907 0 01-1.179-1.23c-.281-.54-.421-1.201-.421-1.982 0-.764.127-1.425.382-1.982.259-.561.622-.993 1.088-1.295.471-.302 1.023-.453 1.658-.453zm-.013.88c-.574 0-1.032.188-1.373.564-.341.375-.544.9-.609 1.574h3.757a3.054 3.054 0 00-.201-1.114 1.565 1.565 0 00-.577-.752c-.259-.181-.591-.272-.997-.272zm8.487-.88c.842 0 1.478.207 1.91.621.432.41.648 1.071.648 1.982V384h-1.062v-4.553c0-.591-.136-1.034-.408-1.327-.268-.294-.68-.441-1.237-.441-.786 0-1.339.223-1.658.667-.32.445-.479 1.09-.479 1.937V384h-1.075v-7.098h.867l.162 1.023h.059c.151-.25.343-.459.576-.628a2.49 2.49 0 01.784-.388 3.02 3.02 0 01.913-.136zm11.031.129V384h-.88l-.156-.997h-.058a2.062 2.062 0 01-.57.621 2.454 2.454 0 01-.79.376c-.289.086-.598.13-.926.13-.561 0-1.032-.091-1.412-.272a1.83 1.83 0 01-.861-.842c-.19-.38-.285-.868-.285-1.464v-4.65h1.088v4.572c0 .592.134 1.034.401 1.328.268.289.676.434 1.224.434.527 0 .946-.099 1.257-.298a1.66 1.66 0 00.68-.874c.138-.389.207-.864.207-1.425v-3.737h1.081zm5.404-.129c.605 0 1.123.133 1.555.401.431.268.762.643.991 1.127.228.479.343 1.04.343 1.684v.667h-4.903c.013.833.22 1.468.622 1.904.402.436.967.654 1.697.654a5.18 5.18 0 001.191-.123 6.517 6.517 0 001.075-.363v.946a5.24 5.24 0 01-1.068.349c-.35.074-.764.111-1.244.111-.682 0-1.278-.139-1.787-.415a2.907 2.907 0 01-1.179-1.23c-.28-.54-.421-1.201-.421-1.982 0-.764.128-1.425.382-1.982.26-.561.622-.993 1.088-1.295.471-.302 1.024-.453 1.658-.453zm-.013.88c-.574 0-1.031.188-1.373.564-.341.375-.544.9-.608 1.574h3.756a3.013 3.013 0 00-.201-1.114 1.563 1.563 0 00-.576-.752c-.259-.181-.592-.272-.998-.272z"
        ></path>
        <circle cx="754.5" cy="369.5" r="17" stroke="#2D3C65"></circle>
        <circle cx="754.5" cy="369.5" r="23" stroke="#2D3C65"></circle>
        <path stroke="#E95A0C" strokeWidth="2" d="M753 369L753 601"></path>
        <circle cx="754.5" cy="369.5" r="9.5" fill="#E95A0C"></circle>
        <path
          fill="#fff"
          d="M1542.47 193.028v-1.779a11.55 11.55 0 01-1.97-.19 7.954 7.954 0 01-1.56-.466v-1.84c.44.208.99.395 1.64.562.65.166 1.28.261 1.89.285v-3.239c-.83-.282-1.51-.575-2.03-.88-.52-.305-.9-.659-1.14-1.062-.25-.409-.37-.898-.37-1.468 0-.588.15-1.091.44-1.511.3-.426.72-.763 1.25-1.011.53-.247 1.15-.394 1.85-.44v-1.408h1.13v1.382a8.93 8.93 0 011.77.216c.54.121 1.06.291 1.56.509l-.63 1.606a9.392 9.392 0 00-1.35-.423 10.15 10.15 0 00-1.35-.224v3.16c.7.23 1.32.478 1.87.743s.98.598 1.29 1.001c.32.398.48.919.48 1.563 0 .847-.31 1.546-.93 2.099-.62.546-1.53.875-2.71.984v1.831h-1.13zm1.13-3.498c.55-.069.96-.213 1.23-.431.27-.225.41-.516.41-.872 0-.242-.06-.447-.18-.614a1.442 1.442 0 00-.52-.449 5.528 5.528 0 00-.94-.388v2.754zm-1.13-5.146v-2.703c-.33.035-.61.104-.84.208-.23.103-.41.238-.52.405a.989.989 0 00-.17.596c0 .254.05.469.15.648.1.178.27.334.49.466a5 5 0 00.89.38zm15.98 4.844h-1.71V192h-2v-2.772H1549v-1.537l5.76-8.35h1.98v8.203h1.71v1.684zm-3.71-1.684v-3.134c0-.259 0-.521.01-.786l.03-.777c.01-.247.02-.475.04-.682.01-.213.02-.389.02-.527h-.07c-.11.23-.23.466-.36.708a9.35 9.35 0 01-.42.691l-3.11 4.507h3.86zm5.72 3.385c0-.472.12-.803.36-.993.25-.195.55-.293.9-.293s.65.098.9.293c.25.19.38.521.38.993 0 .461-.13.795-.38 1.002-.25.201-.55.302-.9.302s-.65-.101-.9-.302c-.24-.207-.36-.541-.36-1.002zm13.57 1.071h-8.55v-1.528l3.27-3.316c.63-.645 1.16-1.2 1.56-1.667.41-.472.72-.918.91-1.338.2-.42.3-.878.3-1.373 0-.61-.17-1.071-.52-1.382-.35-.316-.82-.475-1.39-.475-.55 0-1.06.11-1.52.329a7.25 7.25 0 00-1.44.915l-1.11-1.339c.35-.299.72-.572 1.12-.82.4-.247.85-.443 1.35-.587.49-.15 1.06-.225 1.69-.225.8 0 1.49.144 2.07.432a3.08 3.08 0 011.34 1.183c.32.507.48 1.097.48 1.77 0 .68-.14 1.307-.41 1.883-.27.575-.66 1.145-1.16 1.709-.5.559-1.09 1.166-1.78 1.822l-2.19 2.133v.095h5.98V192zm10.16-9.74c0 .57-.11 1.065-.34 1.485-.23.42-.55.766-.95 1.036-.4.265-.86.455-1.38.57v.061c1.01.126 1.76.443 2.28.949.52.507.77 1.178.77 2.012 0 .731-.17 1.385-.52 1.96-.35.57-.89 1.019-1.62 1.348-.72.328-1.65.492-2.79.492-.69 0-1.33-.055-1.91-.164a7.05 7.05 0 01-1.66-.527v-1.805c.53.265 1.1.469 1.71.613.6.144 1.18.216 1.72.216 1.05 0 1.8-.196 2.25-.587.45-.397.67-.944.67-1.641 0-.449-.11-.817-.35-1.105-.23-.288-.59-.504-1.08-.648-.48-.143-1.11-.215-1.87-.215H1578v-1.632h1.13c.73 0 1.31-.087 1.76-.259.44-.179.76-.424.96-.734.2-.311.3-.674.3-1.088 0-.541-.18-.962-.53-1.261-.35-.305-.87-.458-1.56-.458-.43 0-.82.049-1.17.147-.34.098-.66.222-.96.371-.29.15-.57.311-.83.484l-.98-1.408a6.934 6.934 0 011.71-.906c.66-.248 1.43-.372 2.31-.372 1.3 0 2.3.28 3 .838.7.553 1.05 1.295 1.05 2.228z"
        ></path>
        <path
          fill="#C3C3C3"
          d="M1546.84 203.773c.78 0 1.37.205 1.77.615.4.406.59 1.06.59 1.962V211h-1.06v-4.598c0-.574-.12-1.004-.37-1.289-.25-.289-.62-.434-1.1-.434-.69 0-1.19.199-1.5.596-.31.397-.47.982-.47 1.755V211h-1.07v-4.598c0-.384-.05-.704-.16-.959a1.17 1.17 0 00-.5-.569c-.21-.13-.49-.195-.82-.195-.47 0-.85.097-1.13.292-.29.194-.49.483-.62.868-.13.379-.19.848-.19 1.405V211h-1.08v-7.098h.87l.16 1.004h.06c.14-.246.32-.453.54-.622.21-.168.46-.296.72-.382.27-.086.56-.129.86-.129.54 0 .99.101 1.35.304.37.199.64.503.8.913h.06c.23-.41.55-.714.96-.913.4-.203.85-.304 1.33-.304zm6.05.129V211h-1.08v-7.098h1.08zm-.53-2.655c.18 0 .33.058.45.175.13.112.2.289.2.531 0 .237-.07.414-.2.531a.622.622 0 01-.45.175.67.67 0 01-.47-.175c-.12-.117-.18-.294-.18-.531 0-.242.06-.419.18-.531a.666.666 0 01.47-.175zm6.56 2.526c.85 0 1.48.207 1.91.621.44.41.65 1.071.65 1.982V211h-1.06v-4.553c0-.591-.14-1.034-.41-1.327-.27-.294-.68-.441-1.24-.441-.78 0-1.33.223-1.65.667-.32.445-.48 1.09-.48 1.937V211h-1.08v-7.098h.87l.16 1.023h.06c.15-.25.34-.459.58-.628.23-.173.49-.302.78-.388.29-.091.59-.136.91-.136zm6.25.129V211h-1.08v-7.098h1.08zm-.53-2.655c.18 0 .33.058.46.175.13.112.19.289.19.531 0 .237-.06.414-.19.531a.663.663 0 01-.46.175.646.646 0 01-.46-.175c-.12-.117-.18-.294-.18-.531 0-.242.06-.419.18-.531a.642.642 0 01.46-.175zm10.91 2.526c.79 0 1.37.205 1.77.615.4.406.6 1.06.6 1.962V211h-1.06v-4.598c0-.574-.13-1.004-.38-1.289-.25-.289-.61-.434-1.1-.434-.69 0-1.19.199-1.5.596-.31.397-.46.982-.46 1.755V211h-1.07v-4.598c0-.384-.06-.704-.17-.959a1.153 1.153 0 00-.49-.569c-.22-.13-.49-.195-.83-.195-.47 0-.84.097-1.13.292-.28.194-.49.483-.62.868-.13.379-.19.848-.19 1.405V211h-1.07v-7.098h.86l.17 1.004h.06c.14-.246.32-.453.53-.622.22-.168.46-.296.73-.382.27-.086.55-.129.85-.129.54 0 .99.101 1.36.304.36.199.63.503.79.913h.06c.23-.41.55-.714.96-.913.41-.203.85-.304 1.33-.304zm7.63.013c.85 0 1.47.19 1.88.569.41.38.62.987.62 1.82V211h-.78l-.21-1.049h-.05c-.2.259-.41.477-.63.654a2.2 2.2 0 01-.75.395c-.28.086-.62.13-1.03.13-.43 0-.82-.076-1.16-.227-.33-.151-.59-.38-.79-.687-.19-.306-.28-.695-.28-1.165 0-.708.28-1.252.84-1.632.56-.38 1.42-.587 2.57-.622l1.22-.052v-.434c0-.613-.13-1.042-.4-1.288-.26-.247-.63-.37-1.11-.37-.37 0-.72.054-1.06.162a7.11 7.11 0 00-.96.382l-.33-.816c.32-.164.69-.304 1.1-.421.42-.116.85-.174 1.31-.174zm1.44 3.717l-1.08.045c-.89.035-1.51.179-1.88.434-.36.255-.54.615-.54 1.082 0 .405.12.706.37.9.24.194.57.291.98.291.63 0 1.14-.175 1.54-.524.41-.35.61-.875.61-1.574v-.654zm4.75 3.497h-1.08v-10.077h1.08V211zm9.85-7.227c.89 0 1.59.304 2.12.913s.79 1.524.79 2.746c0 .807-.12 1.485-.36 2.033-.24.548-.59.963-1.03 1.244-.43.28-.95.421-1.54.421-.38 0-.71-.05-.99-.149a2.43 2.43 0 01-.74-.402 2.57 2.57 0 01-.5-.55h-.08c.01.168.03.371.05.608.02.238.03.445.03.622v2.914h-1.08v-10.271h.88l.15 1.049h.05c.14-.216.31-.412.5-.589.2-.181.44-.324.73-.427.29-.108.63-.162 1.02-.162zm-.19.906c-.49 0-.88.095-1.19.285-.29.19-.51.475-.65.855-.14.376-.21.848-.22 1.418v.208c0 .6.06 1.107.19 1.521.14.415.35.73.66.946.3.216.71.324 1.23.324.44 0 .8-.119 1.1-.356.29-.238.51-.568.65-.991.15-.428.22-.918.22-1.47 0-.838-.16-1.503-.49-1.995-.32-.496-.82-.745-1.5-.745zm8.6-.906c.14 0 .29.008.45.026.15.012.29.032.41.058l-.13.997a3.416 3.416 0 00-.79-.097c-.29 0-.56.058-.81.175-.25.112-.47.276-.66.492a2.33 2.33 0 00-.45.771c-.11.298-.16.63-.16.997V211h-1.08v-7.098h.89l.12 1.308h.04c.15-.263.33-.503.53-.719.21-.22.45-.395.72-.524.28-.13.58-.194.92-.194zm3.68.129V211h-1.08v-7.098h1.08zm-.53-2.655c.18 0 .33.058.45.175.13.112.2.289.2.531 0 .237-.07.414-.2.531a.622.622 0 01-.45.175.646.646 0 01-.46-.175c-.13-.117-.19-.294-.19-.531 0-.242.06-.419.19-.531a.642.642 0 01.46-.175zm6.05 9.883c-.64 0-1.21-.132-1.69-.396-.49-.263-.87-.664-1.14-1.204-.28-.54-.41-1.22-.41-2.04 0-.859.14-1.561.43-2.105.29-.548.68-.954 1.19-1.217.5-.264 1.08-.395 1.72-.395.35 0 .7.036 1.02.11.34.069.61.157.82.265l-.32.9a5.715 5.715 0 00-.76-.233 3.286 3.286 0 00-.79-.103c-.49 0-.9.105-1.23.317-.32.212-.56.522-.73.933-.16.41-.24.915-.24 1.515 0 .574.08 1.064.24 1.47.16.406.39.717.7.933.32.211.71.317 1.18.317.38 0 .71-.039 1.02-.117.3-.082.57-.177.82-.285v.959c-.24.121-.5.214-.8.278-.29.065-.63.098-1.03.098zm6.64-7.357c.61 0 1.13.133 1.56.401.43.268.76.643.99 1.127.23.479.34 1.04.34 1.684v.667h-4.9c.01.833.22 1.468.62 1.904.4.436.97.654 1.7.654.45 0 .84-.041 1.19-.123.35-.082.7-.203 1.08-.363v.946a5.38 5.38 0 01-1.07.349c-.35.074-.77.111-1.25.111-.68 0-1.27-.139-1.78-.415-.51-.281-.9-.691-1.18-1.23-.28-.54-.42-1.201-.42-1.982 0-.764.12-1.425.38-1.982.26-.561.62-.993 1.09-1.295.47-.302 1.02-.453 1.65-.453zm-.01.88c-.57 0-1.03.188-1.37.564-.34.375-.55.9-.61 1.574h3.76a3.135 3.135 0 00-.21-1.114 1.518 1.518 0 00-.57-.752c-.26-.181-.59-.272-1-.272z"
        ></path>
        <circle cx="1498.5" cy="196.5" r="17" stroke="#2D3C65"></circle>
        <circle cx="1498.5" cy="196.5" r="23" stroke="#2D3C65"></circle>
        <path stroke="#E95A0C" strokeWidth="2" d="M1497 196L1497 414"></path>
        <circle cx="1498.5" cy="196.5" r="9.5" fill="#E95A0C"></circle>
        <path
          fill="#fff"
          d="M1234.8 16.228h-1.71V19h-2v-2.772h-5.74v-1.537l5.76-8.35h1.98v8.203h1.71v1.684zm-3.71-1.684V11.41c0-.26 0-.521.01-.786l.03-.777c.01-.247.02-.475.04-.682.01-.213.02-.389.02-.527h-.07c-.11.23-.23.466-.36.708-.13.236-.27.466-.42.691l-3.11 4.507h3.86zm5.72 3.385c0-.472.12-.803.36-.993.25-.195.55-.293.9-.293s.65.098.9.293c.25.19.38.521.38.993 0 .46-.13.795-.38 1.002a1.39 1.39 0 01-.9.302c-.35 0-.65-.1-.9-.302-.24-.207-.36-.541-.36-1.002zM1250.38 19h-8.55v-1.528l3.27-3.316c.63-.645 1.16-1.2 1.56-1.667.41-.472.71-.918.91-1.338.2-.42.3-.878.3-1.373 0-.61-.17-1.07-.52-1.382-.36-.316-.82-.475-1.39-.475-.55 0-1.06.11-1.52.329-.46.213-.94.518-1.44.915l-1.11-1.339c.35-.299.72-.572 1.12-.82.4-.247.85-.443 1.35-.587.49-.15 1.06-.225 1.69-.225.8 0 1.49.144 2.07.432.58.282 1.03.677 1.34 1.183.32.507.48 1.097.48 1.77 0 .68-.14 1.307-.41 1.883-.27.575-.66 1.145-1.16 1.71a31.91 31.91 0 01-1.78 1.821l-2.19 2.133v.095h5.98V19zm10.16-9.74c0 .57-.11 1.065-.34 1.485-.23.42-.55.766-.95 1.036-.4.265-.86.455-1.38.57v.06c1 .127 1.76.444 2.28.95.51.507.77 1.178.77 2.012 0 .731-.17 1.385-.52 1.96-.35.57-.89 1.02-1.62 1.348-.72.328-1.66.492-2.8.492-.68 0-1.32-.055-1.9-.164a6.883 6.883 0 01-1.66-.527v-1.805c.53.265 1.1.47 1.71.613.6.144 1.18.216 1.72.216 1.05 0 1.8-.196 2.25-.587.45-.397.67-.944.67-1.64 0-.45-.11-.818-.35-1.106-.23-.288-.59-.504-1.08-.648-.48-.143-1.11-.215-1.87-.215h-1.12v-1.632h1.13c.73 0 1.31-.087 1.76-.26.44-.178.76-.422.96-.733.2-.311.3-.674.3-1.088 0-.541-.18-.962-.53-1.261-.35-.305-.87-.458-1.56-.458-.43 0-.82.05-1.17.147-.34.098-.66.222-.96.371-.29.15-.57.311-.83.484l-.98-1.408c.48-.356 1.05-.659 1.71-.906.66-.248 1.43-.372 2.31-.372 1.3 0 2.3.28 3 .838.7.553 1.05 1.295 1.05 2.228zm5.28-3.066c.93 0 1.63.346 2.11 1.037.48.685.72 1.655.72 2.91 0 1.249-.23 2.225-.69 2.927-.46.702-1.17 1.053-2.14 1.053-.9 0-1.59-.35-2.06-1.053-.47-.702-.71-1.678-.71-2.927 0-1.255.22-2.225.67-2.91.45-.691 1.15-1.037 2.1-1.037zm.01 1.417c-.37 0-.65.21-.83.63-.17.42-.26 1.056-.26 1.908 0 .847.09 1.486.26 1.917.18.426.46.64.83.64.38 0 .66-.214.85-.64.19-.426.28-1.065.28-1.917 0-.846-.09-1.48-.27-1.9-.19-.425-.47-.638-.86-.638zm8.47-1.235l-7 12.624h-1.67l7.01-12.624h1.66zm-.23 4.87c.93 0 1.63.345 2.11 1.036.48.685.72 1.655.72 2.91 0 1.243-.23 2.216-.69 2.919-.45.702-1.17 1.053-2.14 1.053-.9 0-1.59-.351-2.06-1.053-.48-.703-.71-1.676-.71-2.919 0-1.255.22-2.225.66-2.91.45-.69 1.15-1.036 2.11-1.036zm.01 1.416c-.38 0-.65.21-.83.63-.17.42-.26 1.057-.26 1.909 0 .846.09 1.485.26 1.917.18.426.45.639.83.639.38 0 .67-.21.85-.63.19-.427.28-1.069.28-1.926 0-.847-.09-1.48-.28-1.9-.18-.426-.47-.639-.85-.639z"
        ></path>
        <path
          fill="#C3C3C3"
          d="M1228.87 30.773c.6 0 1.12.134 1.55.401.43.268.76.643.99 1.127.23.48.34 1.04.34 1.684v.667h-4.9c.02.833.22 1.468.62 1.904.41.436.97.654 1.7.654.45 0 .85-.041 1.19-.123.35-.082.71-.203 1.08-.363v.946c-.36.16-.72.276-1.07.35-.35.073-.77.11-1.24.11-.69 0-1.28-.139-1.79-.415-.51-.28-.9-.69-1.18-1.23-.28-.54-.42-1.2-.42-1.982 0-.764.13-1.425.38-1.982.26-.561.62-.993 1.09-1.295.47-.302 1.02-.453 1.66-.453zm-.02.88c-.57 0-1.03.188-1.37.564-.34.375-.54.9-.61 1.574h3.76c-.01-.424-.07-.795-.2-1.114a1.594 1.594 0 00-.58-.752c-.26-.181-.59-.272-1-.272zm6.82 2.714l-2.46-3.465h1.24l1.87 2.733 1.86-2.733h1.22l-2.46 3.465 2.6 3.633h-1.24l-1.98-2.895-2 2.895h-1.22l2.57-3.633zm8.98-3.594c.89 0 1.6.304 2.12.913.53.608.79 1.524.79 2.746 0 .807-.12 1.485-.36 2.033-.24.548-.58.963-1.02 1.244-.44.28-.96.42-1.55.42-.38 0-.71-.05-.99-.148-.29-.1-.53-.234-.73-.402a2.382 2.382 0 01-.51-.55h-.08c.02.168.03.37.05.608.02.238.03.445.03.622v2.914h-1.08v-10.27h.89l.14 1.048h.05c.14-.216.31-.412.51-.59.19-.18.44-.323.72-.427.29-.107.63-.161 1.02-.161zm-.18.906c-.5 0-.89.095-1.2.285-.29.19-.51.475-.65.855-.14.376-.21.848-.22 1.418v.208c0 .6.07 1.107.19 1.522.14.414.36.73.66.945.31.216.72.324 1.23.324.44 0 .81-.119 1.1-.356.29-.238.51-.568.65-.991.15-.428.22-.918.22-1.47 0-.838-.16-1.503-.49-1.995-.32-.497-.82-.745-1.49-.745zm8.1-.906c.61 0 1.12.134 1.56.401.43.268.76.643.99 1.127.22.48.34 1.04.34 1.684v.667h-4.9c.01.833.22 1.468.62 1.904.4.436.97.654 1.7.654.44 0 .84-.041 1.19-.123.34-.082.7-.203 1.07-.363v.946c-.36.16-.71.276-1.07.35-.35.073-.76.11-1.24.11-.68 0-1.28-.139-1.79-.415-.5-.28-.9-.69-1.18-1.23-.28-.54-.42-1.2-.42-1.982 0-.764.13-1.425.39-1.982.25-.561.62-.993 1.08-1.295.47-.302 1.03-.453 1.66-.453zm-.01.88c-.58 0-1.03.188-1.37.564-.35.375-.55.9-.61 1.574h3.75c0-.424-.07-.795-.2-1.114a1.576 1.576 0 00-.57-.752c-.26-.181-.6-.272-1-.272zm7.97 6.477c-.64 0-1.21-.132-1.69-.396-.49-.263-.87-.664-1.14-1.204-.28-.54-.41-1.22-.41-2.04 0-.86.14-1.56.43-2.105.29-.548.68-.954 1.19-1.217.5-.264 1.08-.395 1.72-.395.35 0 .7.036 1.02.11.34.069.61.157.82.265l-.32.9a5.685 5.685 0 00-.76-.233c-.28-.069-.54-.103-.79-.103-.49 0-.9.105-1.23.317-.32.211-.56.522-.73.933-.16.41-.24.915-.24 1.515 0 .574.08 1.064.24 1.47.16.406.39.717.7.933.32.211.71.317 1.18.317.38 0 .71-.039 1.02-.117.3-.082.57-.177.82-.285v.959a3.3 3.3 0 01-.8.278c-.29.065-.63.098-1.03.098zm6.2-.881c.18 0 .36-.015.55-.046.18-.03.33-.067.45-.11v.836c-.12.056-.3.103-.52.142-.22.04-.44.059-.65.059-.38 0-.72-.065-1.02-.195a1.547 1.547 0 01-.74-.673c-.18-.316-.27-.752-.27-1.309v-4.209h-1.02v-.524l1.02-.421.43-1.542h.65v1.645h2.08v.842h-2.08v4.177c0 .445.1.777.3.998.21.22.48.33.82.33zm5.57-6.476c.6 0 1.12.134 1.55.401.44.268.77.643.99 1.127.23.48.35 1.04.35 1.684v.667h-4.9c.01.833.22 1.468.62 1.904.4.436.96.654 1.69.654.45 0 .85-.041 1.2-.123.34-.082.7-.203 1.07-.363v.946c-.36.16-.71.276-1.07.35-.35.073-.76.11-1.24.11-.68 0-1.28-.139-1.79-.415-.5-.28-.9-.69-1.18-1.23-.28-.54-.42-1.2-.42-1.982 0-.764.13-1.425.38-1.982.26-.561.63-.993 1.09-1.295.47-.302 1.02-.453 1.66-.453zm-.01.88c-.58 0-1.04.188-1.38.564-.34.375-.54.9-.61 1.574h3.76c0-.424-.07-.795-.2-1.114a1.534 1.534 0 00-.58-.752c-.26-.181-.59-.272-.99-.272zm7.65 6.477c-.9 0-1.61-.307-2.14-.92-.52-.613-.78-1.524-.78-2.733 0-1.222.26-2.144.8-2.765.54-.626 1.25-.94 2.14-.94.37 0 .7.05.98.15.28.099.52.233.73.401.2.164.37.352.51.564h.08a9.323 9.323 0 01-.06-.551c-.01-.233-.02-.423-.02-.57v-2.843h1.07V38h-.86l-.17-1.01h-.04c-.14.211-.31.403-.51.576-.21.173-.45.311-.73.415-.29.099-.62.148-1 .148zm.17-.894c.76 0 1.29-.216 1.61-.648.31-.431.47-1.073.47-1.923v-.194c0-.903-.15-1.596-.45-2.08-.3-.483-.84-.725-1.63-.725-.66 0-1.16.255-1.49.765-.33.505-.49 1.195-.49 2.072 0 .872.16 1.545.49 2.02.32.475.82.713 1.49.713zm11.65 3.95c-.94 0-1.66-.175-2.16-.524-.51-.346-.76-.831-.76-1.457 0-.445.14-.825.42-1.14.29-.315.68-.525 1.18-.628a1.395 1.395 0 01-.48-.389.96.96 0 01-.19-.596c0-.259.07-.485.21-.68.15-.198.37-.388.67-.57a1.938 1.938 0 01-.91-.764c-.23-.363-.34-.784-.34-1.263 0-.51.1-.943.32-1.301.21-.363.51-.64.92-.83.4-.19.88-.284 1.45-.284.13 0 .25.006.38.02.13.008.25.023.37.044.11.018.22.04.3.065h2.44v.693l-1.31.162c.13.168.24.371.32.609.09.237.13.5.13.79 0 .708-.24 1.271-.72 1.69-.48.415-1.13.622-1.97.622-.2 0-.4-.017-.61-.052-.21.117-.37.246-.49.389a.844.844 0 00-.16.492c0 .138.04.248.12.33.09.082.21.143.37.181.16.035.36.052.58.052h1.25c.77 0 1.36.162 1.77.486.42.324.63.797.63 1.418 0 .786-.32 1.388-.96 1.807-.64.419-1.57.628-2.77.628zm.03-.842c.59 0 1.07-.06 1.46-.181.38-.116.67-.287.86-.512.2-.22.29-.483.29-.79 0-.285-.06-.5-.19-.647-.13-.143-.32-.238-.57-.285a4.644 4.644 0 00-.92-.078h-1.23c-.32 0-.6.05-.84.149-.23.1-.42.246-.55.44-.12.195-.18.436-.18.726 0 .384.16.675.48.874.33.203.79.304 1.39.304zm.28-5.673c.51 0 .9-.13 1.16-.388.26-.26.38-.637.38-1.134 0-.53-.13-.928-.39-1.191-.26-.268-.65-.402-1.17-.402-.49 0-.87.138-1.14.415-.26.272-.39.671-.39 1.198 0 .483.13.855.4 1.114.27.259.65.388 1.15.388zm8.53-3.898c.14 0 .29.008.45.026.15.012.29.032.41.058l-.14.997c-.11-.03-.24-.054-.38-.071a3.513 3.513 0 00-.41-.026c-.28 0-.55.058-.81.175-.25.112-.47.276-.66.492-.19.212-.34.468-.44.77-.11.299-.16.631-.16.998V38h-1.09v-7.098h.9l.11 1.308h.05c.15-.263.32-.503.53-.719.21-.22.45-.395.72-.524.28-.13.58-.194.92-.194zm8.72 3.665c0 .583-.08 1.103-.23 1.56-.15.459-.37.845-.65 1.16a2.87 2.87 0 01-1.04.725c-.4.164-.86.246-1.36.246-.48 0-.92-.081-1.31-.246a2.92 2.92 0 01-1.03-.725c-.28-.315-.5-.702-.66-1.16a4.715 4.715 0 01-.24-1.56c0-.777.14-1.438.4-1.982a2.79 2.79 0 011.13-1.25c.49-.289 1.07-.433 1.75-.433.65 0 1.21.144 1.7.433.48.29.86.709 1.13 1.257.27.544.41 1.202.41 1.975zm-5.4 0c0 .57.07 1.064.22 1.483.16.419.39.743.7.972.32.228.72.343 1.22.343.49 0 .9-.115 1.21-.343.32-.23.56-.553.71-.972.15-.419.22-.913.22-1.483 0-.566-.07-1.053-.22-1.464a1.989 1.989 0 00-.7-.958c-.32-.224-.72-.337-1.23-.337-.73 0-1.28.244-1.62.732-.34.488-.51 1.164-.51 2.027zm13.43 3.549l-1.26-4.132c-.06-.177-.11-.35-.16-.518-.05-.173-.1-.337-.14-.492-.04-.16-.07-.307-.11-.44-.03-.139-.06-.257-.08-.357h-.04c-.02.1-.04.218-.07.357-.03.133-.07.28-.11.44-.04.16-.09.328-.13.505-.05.173-.1.348-.16.525l-1.33 4.112h-1.21l-1.95-7.098h1.11l1.02 3.918c.07.26.14.516.2.77.06.251.12.489.16.713.05.22.08.413.1.577h.06c.02-.108.05-.238.08-.389.03-.151.07-.31.11-.48.04-.172.09-.342.14-.51.04-.173.09-.335.14-.486l1.31-4.113h1.16l1.26 4.106c.06.207.13.423.19.648.06.224.12.442.17.654.05.207.09.393.11.557h.05c.02-.147.05-.328.1-.544.05-.216.1-.454.16-.713.07-.259.13-.522.2-.79l1.04-3.918h1.09l-1.96 7.098h-1.25zm7.2-.738c.18 0 .36-.015.54-.046.19-.03.34-.067.46-.11v.836c-.13.056-.3.103-.53.142-.22.04-.43.059-.65.059-.37 0-.71-.065-1.02-.195-.31-.134-.55-.358-.74-.673-.18-.316-.27-.752-.27-1.309v-4.209h-1.01v-.524l1.02-.421.43-1.542h.64v1.645h2.08v.842h-2.08v4.177c0 .445.1.777.31.998.2.22.48.33.82.33zm3.91-9.326v3.012c0 .172-.01.347-.02.524 0 .173-.02.332-.04.48h.07c.15-.251.33-.46.56-.629.23-.173.49-.302.77-.388.29-.091.6-.136.92-.136.57 0 1.05.09 1.43.272.38.18.67.462.86.841.19.38.29.873.29 1.477V38h-1.06v-4.553c0-.591-.14-1.034-.41-1.327-.27-.294-.68-.44-1.24-.44-.52 0-.94.1-1.26.304-.31.198-.53.492-.67.88-.14.389-.2.864-.2 1.425V38h-1.08V27.923h1.08z"
        ></path>
        <circle cx="1185.5" cy="23.5" r="17" stroke="#2D3C65"></circle>
        <circle cx="1185.5" cy="23.5" r="23" stroke="#2D3C65"></circle>
        <path stroke="#E95A0C" strokeWidth="2" d="M1184 23L1184 225"></path>
        <circle cx="1185.5" cy="23.5" r="9.5" fill="#E95A0C"></circle>
      </g>
      <defs>
        <clipPath id="clip0_38_579">
          <path fill="#fff" d="M0 0H1728V694H0z"></path>
        </clipPath>
      </defs>
    </svg>
    </div>
    
    
    
  );
}

export default Icon;



















































































































   // const iconRef = useRef(null);

//   useEffect(() => {
//     // const icon = iconRef.current;

//     // Add event listeners to the icon to track mouse movement
//     icon.addEventListener('mouseenter', handleMouseEnter);
//     icon.addEventListener('mouseleave', handleMouseLeave);
//     icon.addEventListener('mousemove', handleMouseMove);

//     // Remove event listeners when the component unmounts
//     return () => {
//       icon.removeEventListener('mouseenter', handleMouseEnter);
//       icon.removeEventListener('mouseleave', handleMouseLeave);
//       icon.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // Animate the icon's position when the mouse enters
//   const handleMouseEnter = () => {
//     gsap.to(iconRef.current, { scale: 1.2, duration: 0.5 });
//   };

//   // Reset the icon's position when the mouse leaves
//   const handleMouseLeave = () => {
//     gsap.to(iconRef.current, { scale: 1, duration: 0.5 });
//   };

//   // Move the icon based on the mouse movement
//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     gsap.to(iconRef.current, { x: clientX, y: clientY, duration: 0.2 });
//   };

//     // useEffect(() => {
//         // GSAP ko initialize karein
    
//         // ScrollTrigger ka istemal karein
//     //     gsap.to('.icon', {
//     //       scrollTrigger: {
//     //         trigger: '.icon',
//     //         start: 'top center', // Icon ko animate shuru hone ka point
//     //         end: 'bottom center', // Icon ko animate khatam hone ka point
//     //         scrub: true, // Icon ko scroll ke sath sath move karein
//     //       },
//     //       x: 100, // X-axis par movement (right direction)
//     //       duration: 2, // Animation duration
//     //     });
//     //   }, []);
// const iconRef = React.useRef(null);
// const containerRef = React.useRef(null);
// const [iconCenter, setIconCenter] = useState({ x: 0, y: 0 });

// useEffect(() => {
//   const iconBounds = iconRef.current.getBoundingClientRect();
//   const centerX = iconBounds.left + iconBounds.width / 2;
//   const centerY = iconBounds.top + iconBounds.height / 2;
//   setIconCenter({ x: centerX, y: centerY });

//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;

//     const distance = Math.sqrt(
//       Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
//     );

//     if (distance > 50) { // Adjust the threshold as needed
//       const newPositionX = clientX - iconBounds.width / 2;
//       const newPositionY = clientY - iconBounds.height / 2;

//       gsap.to(iconRef.current, {
//         x: newPositionX,
//         y: newPositionY,
//         duration: 0.3,
//         ease: 'power2.out'
//       });
//     }
//   };

//   containerRef.current.addEventListener('mousemove', handleMouseMove);

//   return () => {
//     containerRef.current.removeEventListener('mousemove', handleMouseMove);
//   };
// }, []);
// const iconRef = useRef(null);








// function Icon() {
 

// useEffect(() => {
//   const icon = iconRef.current;

//   const handleMouseEnter = () => {
//     gsap.to(icon, { x: 100, duration: 0.3 }); // Move icon to the right on hover
//   };

//   const handleMouseLeave = () => {
//     gsap.to(icon, { x: 0, duration: 0.3 }); // Move icon back to its original position
//   };

//   icon.addEventListener('mouseenter', handleMouseEnter);
//   icon.addEventListener('mouseleave', handleMouseLeave);

//   return () => {
//     icon.removeEventListener('mouseenter', handleMouseEnter);
//     icon.removeEventListener('mouseleave', handleMouseLeave);
//   };
// }, []);
//   return (
//     <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>

//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="800"
//       height="470"
//       fill="none"
//       viewBox="0 0 1728 470"
//       className='icon'
//       style={{ position: 'absolute', cursor: 'pointer' }}
//       ref={iconRef}


//     >
//       <path
//         fill="#2D3C65"
//         fillOpacity="0.6"
//         fillRule="evenodd"
//         d="M-94 95.2v94.2h347.5v188.4h695V1H1296v188.4h347.5v47.1H1991V472H-94V95.2z"
//         clipRule="even"
//       ></path>
//       <path
//         stroke="#E95A0C"
//         strokeWidth="4"
//         d="M601 377.8H253.5V189.4H-94V95.2 472m695-94.2v0zm0 0h347.5V1H1296v188.4h347.5v47.1H1991V472h-347.5m0 0v0zm0 0H1296m0 0v0zm0 0H948.5m0 0v0zm0 0H601m0 0v0zm0 0H253.5m0 0v0zm0 0H-94m0 0v0z"
//       ></path>
//     </svg>
//     </div>

//   );
// }

// export default Icon;