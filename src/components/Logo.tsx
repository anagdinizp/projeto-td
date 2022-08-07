export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="161"
      height="148"
      fill="none"
      viewBox="0 0 161 148"
    >
      <ellipse
        cx="80.5"
        cy="74"
        fill="url(#pattern0)"
        rx="80.5"
        ry="74"
      ></ellipse>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.005 0 0 .00544 0 -.044)"
            xlinkHref="#image0_20_137"
          ></use>
        </pattern>
        <image
          id="image0_20_137"
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}
