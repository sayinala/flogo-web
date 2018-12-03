import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flogo-mapper-icons',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .flogo-mapper-icon {
        fill: #727272;
        width: 20px;
        height: 20px;
        pointer-events: none;
        vertical-align: middle;
      }
    `,
  ],
  /* tslint:disable:max-line-length */
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; width: 0; height: 0; overflow: hidden;"
      version="1.1"
    >
      <defs>
        <symbol id="flogo-mapper-icon-date" viewBox="0 0 32 32">
          <title>icon-date</title>
          <path
            d="M20 24h4v-4h-4v4zM14 24h4v-4h-4v4zM8 24h4v-4h-4v4zM20 18h4v-4h-4v4zM14 18h4v-4h-4v4zM8 18h4v-4h-4v4zM26 25c0 0.552-0.448 1-1 1h-18c-0.552 0-1-0.448-1-1v-12c0-0.552 0.448-1 1-1h18c0.552 0 1 0.448 1 1v12zM26 8h-2v-3c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1v3h-8v-3c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1v3h-2c-1.105 0-2 0.895-2 2v16c0 1.105 0.895 2 2 2h20c1.105 0 2-0.895 2-2v-16c0-1.105-0.895-2-2-2z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-array" viewBox="0 0 32 32">
          <title>icon-array</title>
          <path
            d="M18.878 4v2.64h6.504v17.040h-6.504v2.64h9.48v-22.32h-9.48zM4 4v22.32h9.48v-2.64h-6.504v-17.040h6.504v-2.64h-9.48z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-boolean" viewBox="0 0 32 32">
          <title>icon-boolean</title>
          <path
            d="M10.666 18v-4h1.334v4h-1.334zM8 18v-4h1.334v4h-1.334zM22 20v-8h2v8h-2zM10 22c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6zM22 8h-12c-4.418 0-8 3.582-8 8s3.582 8 8 8h12c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-close" viewBox="0 0 32 32">
          <title>icon-close</title>
          <path
            d="M30.886 4.605l-11.078 10.684 11.078 10.684c0.506 0.488 0.82 1.163 0.82 1.908 0 1.489-1.253 2.698-2.798 2.698-0.771 0-1.472-0.302-1.978-0.792l-11.076-10.683-11.078 10.683c-0.506 0.49-1.206 0.792-1.978 0.792-1.544 0-2.798-1.209-2.798-2.698 0-0.745 0.313-1.419 0.82-1.908l11.078-10.684-11.078-10.684c-0.506-0.488-0.82-1.162-0.82-1.907 0-1.491 1.254-2.698 2.798-2.698 0.772 0 1.472 0.302 1.978 0.791l11.078 10.683 11.076-10.683c0.506-0.488 1.207-0.791 1.978-0.791 1.544 0 2.798 1.208 2.798 2.698 0 0.745-0.313 1.418-0.82 1.907z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-object" viewBox="0 0 32 32">
          <title>icon-object</title>
          <path
            d="M28 16.36c-1.090 0-1.922 0.224-2.496 0.672s-0.864 1.256-0.864 2.424v3c0 1.296-0.328 2.264-0.984 2.904s-1.586 0.96-2.784 0.96h-3.598v-2.64h1.894c0.464 0 0.856-0.032 1.176-0.096 0.298-0.049 0.56-0.177 0.772-0.362 0.197-0.192 0.34-0.441 0.402-0.721 0.079-0.336 0.123-0.711 0.123-1.097 0-0.044-0.001-0.088-0.002-0.131l0-2.73c0-1.040 0.294-1.836 0.876-2.388 0.586-0.552 1.332-0.86 2.246-0.924v-0.24c-0.93-0.080-1.684-0.372-2.258-0.876s-0.864-1.284-0.864-2.34v-2.736c0-0.496-0.042-0.9-0.132-1.212-0.073-0.289-0.219-0.537-0.418-0.732-0.207-0.18-0.465-0.307-0.749-0.359-0.326-0.063-0.69-0.098-1.062-0.098-0.031 0-0.062 0-0.093 0.001l-1.913-0v-2.64h3.598c1.25 0 2.186 0.344 2.82 1.032 0.632 0.688 0.948 1.64 0.948 2.856v3.072c0 1.056 0.286 1.82 0.852 2.292s1.402 0.708 2.508 0.708v2.4zM14.728 6.64h-1.922c-0.462 0-0.85 0.032-1.162 0.096-0.293 0.052-0.55 0.179-0.758 0.362-0.197 0.192-0.341 0.441-0.404 0.721-0.079 0.339-0.123 0.718-0.123 1.107 0 0.040 0 0.081 0.001 0.121l-0 2.73c0 1.056-0.288 1.836-0.864 2.34s-1.33 0.796-2.256 0.876v0.24c0.912 0.064 1.66 0.372 2.244 0.924s0.876 1.348 0.876 2.388v2.736c0 0.496 0.040 0.9 0.12 1.212s0.216 0.556 0.408 0.732c0.209 0.183 0.47 0.311 0.759 0.359 0.327 0.065 0.721 0.099 1.185 0.099h1.896v2.638h-3.6c-1.2 0-2.128-0.32-2.784-0.96s-0.984-1.608-0.984-2.904v-3c0-1.168-0.288-1.976-0.864-2.424s-1.408-0.672-2.496-0.672v-2.4c1.104 0 1.94-0.236 2.508-0.708s0.852-1.236 0.852-2.292v-3.072c0-1.216 0.316-2.168 0.948-2.856s1.572-1.032 2.82-1.032h3.6v2.64z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-search" viewBox="0 0 32 32">
          <title>icon-search</title>
          <path
            d="M31.12 26.88c0.564 0.546 0.915 1.311 0.915 2.157 0 1.657-1.343 3-3 3-0.847 0-1.612-0.351-2.158-0.916l-8.789-8.791c-1.74 1.049-3.841 1.67-6.087 1.67-0 0-0.001 0-0.001 0-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12 0 2.224-0.616 4.3-1.67 6.088l8.792 8.792zM12 3c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9s-4.029-9-9-9z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-string" viewBox="0 0 24 24">
          <title>icon-string</title>
          <path
            d="M18 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6.837.416c.506 0 .886-.094 1.14-.28.253-.187.437-.386.553-.6v-.96a7.52 7.52 0 0 0-.475-.072 5.568 5.568 0 0 0-.68-.04c-.2 0-.401.018-.601.056-.201.038-.38.096-.538.175-.159.08-.285.185-.379.313a.754.754 0 0 0-.143.465c0 .298.087.53.261.695.174.166.462.248.862.248zM5.44 8.544c.426-.192.92-.357 1.48-.496.56-.138 1.224-.208 1.992-.208.555 0 1.026.067 1.416.2.389.133.704.323.944.568.24.246.414.539.52.88.106.342.16.725.16 1.152 0 .544-.018 1.008-.056 1.392a10.51 10.51 0 0 0-.056 1.025c0 .222.011.474.032.752.022.148.037.293.048.431H13V16h-2.726l-.21-1.088h-.08a2.75 2.75 0 0 1-.906.856c-.392.24-.923.36-1.59.36-.796 0-1.426-.213-1.892-.64-.467-.426-.7-.992-.7-1.696 0-.448.082-.835.247-1.16a2.07 2.07 0 0 1 .714-.8c.313-.208.69-.362 1.129-.464a6.584 6.584 0 0 1 2.076-.12c.211.022.471.043.778.064.021-.107.032-.213.032-.32v-.304c0-.405-.116-.696-.35-.872-.233-.176-.577-.264-1.032-.264-.54 0-1.027.07-1.462.208a9.529 9.529 0 0 0-1.095.416L5.44 8.544z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-string-array" viewBox="0 0 24 24">
          <title>icon-string-array</title>
          <path
            d="M18 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6.201.643c.438 0 .768-.081.988-.243.22-.162.38-.335.481-.52v-.833a6.453 6.453 0 0 0-.413-.063 4.73 4.73 0 0 0-.59-.035c-.173 0-.348.016-.521.049-.174.033-.33.083-.467.152a.92.92 0 0 0-.329.271.657.657 0 0 0-.124.403c0 .259.076.46.227.604.15.144.4.215.748.215zM6.437 9.549c.369-.167.798-.31 1.283-.431.486-.119 1.062-.18 1.728-.18.482 0 .891.058 1.229.174.337.115.611.28.819.492.208.213.358.468.451.764.092.296.139.629.139.999 0 .472-.016.875-.049 1.208a9.102 9.102 0 0 0-.049.889c0 .193.01.411.028.652.019.129.032.254.042.374h.94v1.527H10.63l-.182-.944h-.069a2.378 2.378 0 0 1-.787.742c-.34.209-.8.313-1.379.313-.69 0-1.237-.185-1.642-.555-.405-.37-.606-.861-.606-1.472 0-.388.07-.724.213-1.006.143-.282.349-.513.62-.694.272-.18.599-.314.98-.402a5.679 5.679 0 0 1 1.8-.104c.184.018.409.037.675.056.019-.094.028-.186.028-.278v-.264c0-.352-.101-.604-.303-.757-.203-.152-.501-.229-.896-.229a4.17 4.17 0 0 0-1.268.181c-.376.12-.694.241-.95.36l-.427-1.415zM21.98 22H16v-2h4V4h-4V2.038L22 2l-.02 20zM2 2l6 .038V4H4v16h4v2H2.02L2 2z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-double-array" viewBox="0 0 24 24">
          <title>icon-double-array</title>
          <path
            d="M18 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7.492.585h1.967V8.964l-1.697 1.299-.772-1.029 2.932-2.238h1.132v7.589H13V16H7.508v-1.415zM21.98 22H16v-2h4V4h-4V2.038L22 2l-.02 20zM2 2l6 .038V4H4v16h4v2H2.02L2 2z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-boolean-array" viewBox="0 0 24 24">
          <title>icon-boolean-array</title>
          <path
            d="M15 14h1v-4h-1v4zm-6 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7H9a4 4 0 0 0 0 8h6a4 4 0 0 0 0-8zm6.98 14H16v-2h4V4h-4V2.038L22 2l-.02 20zM2 2l6 .038V4H4v16h4v2H2.02L2 2z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-date-array" viewBox="0 0 24 24">
          <title>icon-date-array</title>
          <path
            d="M14 16h2v-2h-2v2zm-3 0h2v-2h-2v2zm-3 0h2v-2H8v2zm6-3h2v-2h-2v2zm-3 0h2v-2h-2v2zm-3 0h2v-2H8v2zm9 3.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v6zM17 8h-1V7a1 1 0 0 0-2 0v1h-4V7a1 1 0 0 0-2 0v1H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm4.98 14H16v-2h4V4h-4V2.038L22 2l-.02 20zM2 2l6 .038V4H4v16h4v2H2.02L2 2z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-object-array" viewBox="0 0 24 24">
          <title>icon-date-array</title>
          <path
            d="M16.602 15.828c0 .647-.164 1.132-.492 1.452-.328.32-.792.48-1.392.48h-1.8v-1.32h.949c.23 0 .427-.016.588-.049a.769.769 0 0 0 .383-.179.727.727 0 0 0 .204-.366c.04-.156.06-.358.06-.606v-1.368c0-.52.146-.918.438-1.194.292-.276.666-.43 1.123-.462v-.12c-.465-.04-.841-.186-1.128-.438-.288-.252-.433-.642-.433-1.17V9.12c0-.248-.021-.45-.065-.606a.78.78 0 0 0-.21-.366.785.785 0 0 0-.38-.18 2.887 2.887 0 0 0-.57-.048h-.96V6.6h1.8c.625 0 1.095.172 1.41.516.317.344.475.82.475 1.428v1.536c0 .528.143.91.426 1.145.284.237.702.355 1.255.355v1.2c-.545 0-.961.112-1.248.336-.288.224-.433.628-.433 1.212v1.5zm-9.204-1.5c0-.584-.144-.988-.432-1.212-.288-.224-.704-.336-1.248-.336v-1.2c.552 0 .97-.118 1.254-.355.284-.235.426-.617.426-1.145V8.544c0-.608.158-1.084.474-1.428.316-.344.786-.517 1.41-.517h1.8V7.92h-.96c-.232 0-.426.016-.582.048a.777.777 0 0 0-.378.18.727.727 0 0 0-.204.366 2.46 2.46 0 0 0-.06.606v1.368c0 .528-.144.918-.432 1.17-.288.252-.664.398-1.128.438v.12c.456.032.829.186 1.122.462.292.276.438.674.438 1.194v1.368c0 .248.019.45.06.606.04.156.108.278.204.366a.772.772 0 0 0 .384.18c.16.032.356.048.588.048h.948v1.32h-1.8c-.6 0-1.064-.16-1.392-.48-.328-.32-.492-.805-.492-1.452v-1.5zM21.98 22H16v-2h4V4h-4V2.038L22 2l-.02 20zM2 2l6 .038V4H4v16h4v2H2.02L2 2z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-any" viewBox="0 0 32 32">
          <title>any</title>
          <path
            d="M11.985 2.667l3.828 9.388 3.851-9.333 5.776 3.2-7.062 8.48 10.955-1.387v6.507l-10.42-1.442 6.74 7.946-5.721 3.307-4.225-9.811-3.722 9.6-5.744-3.359 6.592-7.682-10.166 1.442v-6.667l10.592 1.546-7.018-8.428z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-complex-object" viewBox="0 0 32 32">
          <title>complex-object</title>
          <path
            d="M25.418 4h-18.836c-1.426 0-2.582 1.156-2.582 2.582 0 0 0 0 0 0v0 1.503c0 0 0 0 0 0 0 1.426 1.156 2.582 2.582 2.582h1.418v14.667c0 0 0 0 0 0 0 0.736 0.597 1.333 1.333 1.333 0 0 0 0 0 0h8.678c0.027 0.741 0.632 1.331 1.377 1.333h5.891c0.766-0 1.388-0.621 1.388-1.388v0-2.558c-0-0.766-0.621-1.388-1.388-1.388h-5.891c-0.744 0.002-1.35 0.593-1.377 1.331l-0 0.002h-7.344v-5.333h7.344c0.027 0.741 0.632 1.331 1.377 1.333h5.891c0.766-0 1.388-0.621 1.388-1.388v0-2.558c-0-0.766-0.621-1.388-1.388-1.388h-5.891c-0.744 0.002-1.35 0.593-1.377 1.331l-0 0.002h-7.344v-5.333h14.751c1.426 0 2.582-1.156 2.582-2.582 0-0 0-0 0-0v0-1.503c0 0 0-0 0-0 0-1.426-1.156-2.582-2.582-2.582v0z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-integer" viewBox="0 0 32 32">
          <title>integer</title>
          <path
            d="M1.803 20.308h2.745v-7.844l-2.369 1.813-1.077-1.436 4.092-3.123h1.58v10.591h2.693v1.974h-7.665z"
          ></path>
          <path
            d="M20.057 22.282h-8.005v-1.741c0.144-0.119 0.322-0.278 0.538-0.475 0.216-0.198 0.458-0.422 0.727-0.674q0.403-0.376 0.852-0.825c0.299-0.299 0.593-0.611 0.88-0.933q0.61-0.682 1.068-1.239c0.26-0.309 0.508-0.652 0.732-1.012l0.022-0.038c0.173-0.279 0.322-0.6 0.431-0.939l0.008-0.031c0.091-0.292 0.144-0.627 0.144-0.974 0-0.001 0-0.003 0-0.004v0c-0.001-0.255-0.060-0.495-0.165-0.71l0.004 0.010c-0.114-0.235-0.265-0.435-0.448-0.6l-0.002-0.001c-0.195-0.174-0.424-0.314-0.676-0.408l-0.015-0.005c-0.256-0.097-0.553-0.152-0.862-0.152-0.009 0-0.019 0-0.028 0h0.001c-0.013-0-0.028-0-0.043-0-0.406 0-0.795 0.072-1.156 0.205l0.023-0.007c-0.423 0.172-0.788 0.396-1.109 0.669l0.006-0.005-0.933-1.651c0.484-0.347 1.037-0.652 1.624-0.887l0.053-0.019c0.6-0.234 1.295-0.369 2.022-0.369 0.037 0 0.074 0 0.111 0.001l-0.006-0c0.006-0 0.013-0 0.020-0 0.521 0 1.024 0.078 1.497 0.224l-0.036-0.010c0.481 0.146 0.899 0.364 1.266 0.645l-0.009-0.007c0.362 0.28 0.655 0.631 0.862 1.033l0.008 0.017c0.204 0.404 0.324 0.881 0.324 1.386 0 0.024-0 0.048-0.001 0.071l0-0.004c0 0.010 0 0.023 0 0.035 0 0.365-0.036 0.722-0.104 1.067l0.006-0.035c-0.077 0.377-0.183 0.707-0.319 1.022l0.013-0.034c-0.167 0.391-0.347 0.724-0.553 1.039l0.015-0.025q-0.332 0.521-0.799 1.131c-0.24 0.312-0.5 0.626-0.781 0.943q-0.422 0.475-0.835 0.906t-0.816 0.807q-0.404 0.378-0.727 0.629h5.17z"
          ></path>
          <path
            d="M25.89 20.559c0.012 0 0.026 0 0.040 0 0.373 0 0.733-0.055 1.072-0.158l-0.026 0.007c0.323-0.096 0.605-0.243 0.85-0.434l-0.006 0.004c0.223-0.174 0.406-0.388 0.541-0.633l0.005-0.011c0.124-0.226 0.197-0.496 0.197-0.783 0-0.004-0-0.009-0-0.013v0.001c0.001-0.017 0.001-0.037 0.001-0.057 0-0.311-0.083-0.602-0.229-0.853l0.004 0.008c-0.153-0.246-0.363-0.443-0.611-0.576l-0.009-0.004c-0.275-0.146-0.596-0.253-0.935-0.303l-0.016-0.002c-0.349-0.057-0.752-0.089-1.162-0.089-0.014 0-0.029 0-0.043 0h-1.002v-1.288l3.015-3.684h-4.541v-1.974h7.324v1.633l-3.16 3.608h0.413c0.001 0 0.001 0 0.002 0 0.437 0 0.856 0.079 1.243 0.224l-0.024-0.008c0.408 0.15 0.758 0.37 1.052 0.648l-0.001-0.001c0.309 0.298 0.558 0.656 0.727 1.056l0.008 0.021c0.176 0.418 0.279 0.904 0.279 1.414 0 0.027-0 0.053-0.001 0.080l0-0.004c0.001 0.025 0.001 0.053 0.001 0.082 0 0.626-0.156 1.216-0.432 1.732l0.010-0.020c-0.283 0.518-0.656 0.951-1.102 1.294l-0.010 0.007c-0.451 0.345-0.981 0.616-1.555 0.782l-0.034 0.008c-0.55 0.165-1.182 0.26-1.837 0.26-0.004 0-0.009 0-0.013 0h0.001c-0 0-0.001 0-0.001 0-0.571 0-1.129-0.052-1.671-0.152l0.056 0.009c-0.591-0.106-1.115-0.261-1.613-0.467l0.051 0.019 0.628-1.939c0.125 0.067 0.271 0.128 0.423 0.175l0.017 0.005c0.185 0.060 0.394 0.119 0.628 0.18 0.19 0.052 0.433 0.102 0.681 0.139l0.038 0.005c0.218 0.034 0.47 0.054 0.726 0.054h0z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-double" viewBox="0 0 32 32">
          <title>double</title>
          <path
            d="M3.382 20.277h2.807v-8.021l-2.422 1.854-1.101-1.469 4.184-3.194h1.615v10.829h2.753v2.019h-7.837z"
          ></path>
          <path
            d="M14.633 21.085c-0.001-0.020-0.002-0.043-0.002-0.066 0-0.375 0.156-0.713 0.406-0.953l0-0c0.264-0.235 0.613-0.378 0.996-0.378 0.024 0 0.048 0.001 0.071 0.002l-0.003-0c0.025-0.001 0.054-0.002 0.083-0.002 0.39 0 0.747 0.143 1.020 0.38l-0.002-0.002c0.25 0.242 0.405 0.58 0.405 0.954 0 0.023-0.001 0.046-0.002 0.069l0-0.003c0.001 0.018 0.001 0.040 0.001 0.062 0 0.378-0.155 0.72-0.404 0.965l-0 0c-0.269 0.241-0.626 0.388-1.017 0.388-0.030 0-0.059-0.001-0.088-0.003l0.004 0c-0.021 0.001-0.045 0.002-0.069 0.002-0.384 0-0.734-0.147-0.996-0.388l0.001 0.001c-0.251-0.245-0.406-0.587-0.406-0.965 0-0.022 0.001-0.044 0.002-0.065l-0 0.003z"
          ></path>
          <path
            d="M24.139 20.442c0.012 0 0.026 0 0.041 0 0.384 0 0.755-0.054 1.107-0.154l-0.028 0.007c0.34-0.094 0.636-0.238 0.899-0.428l-0.008 0.006c0.486-0.351 0.799-0.916 0.799-1.554 0-0.015-0-0.030-0-0.045l0 0.002c0.001-0.019 0.001-0.040 0.001-0.062 0-0.63-0.314-1.186-0.794-1.521l-0.006-0.004c-0.602-0.369-1.33-0.588-2.11-0.588-0.1 0-0.2 0.004-0.298 0.011l0.013-0.001c-0.134 0-0.291 0.002-0.468 0.009-0.177 0.006-0.346 0.016-0.504 0.027-0.184 0.012-0.374 0.019-0.569 0.019v-6.718h6.644v2.239h-4.588v2.478c0.001 0 0.002 0 0.003 0 0.102 0 0.203-0.007 0.302-0.019l-0.012 0.001c0.085 0 0.168-0.003 0.248-0.010 0.080-0.006 0.15-0.009 0.211-0.009 0.014-0 0.031-0 0.047-0 0.594 0 1.164 0.098 1.697 0.278l-0.037-0.011c0.533 0.178 0.992 0.451 1.38 0.801l-0.003-0.003c0.386 0.353 0.694 0.784 0.9 1.27l0.009 0.024c0.203 0.482 0.322 1.042 0.322 1.63 0 0.018-0 0.035-0 0.053l0-0.003c0.001 0.027 0.001 0.058 0.001 0.090 0 0.657-0.149 1.279-0.416 1.834l0.011-0.025c-0.27 0.545-0.641 1.002-1.093 1.362l-0.008 0.006c-0.459 0.361-0.996 0.646-1.58 0.825l-0.035 0.009c-0.572 0.181-1.231 0.285-1.913 0.285-0.018 0-0.036-0-0.053-0l0.003 0c-0.306-0.002-0.604-0.032-0.893-0.087l0.031 0.005c-0.306-0.056-0.605-0.123-0.9-0.203-0.333-0.089-0.605-0.179-0.87-0.284l0.053 0.019q-0.376-0.146-0.633-0.276l0.771-1.909c0.273 0.15 0.592 0.287 0.924 0.394l0.039 0.011c0.402 0.139 0.866 0.22 1.348 0.22 0.007 0 0.014-0 0.021-0h-0.001z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-params" viewBox="0 0 32 32">
          <title>params</title>
          <path
            d="M6.665 17.999c0-1.585 1.315-2.385 4.671-2.585-0.071-0.643-0.557-1.028-1.514-1.028-0.802 0.052-1.538 0.29-2.18 0.669l0.023-0.012-0.743-1.371c0.946-0.579 2.087-0.932 3.308-0.957l0.007-0c0.105-0.013 0.225-0.021 0.348-0.021 1.586 0 2.872 1.286 2.872 2.872 0 0.123-0.008 0.244-0.023 0.363l0.001-0.014v4.056h-1.714l-0.157-0.8h-0.057c-0.682 0.564-1.552 0.922-2.504 0.971l-0.010 0c-0.054 0.005-0.118 0.008-0.181 0.008-1.186 0-2.147-0.961-2.147-2.147 0-0.001 0-0.003 0-0.004v0zM11.336 17.842v-1.17c-2.086 0.114-2.657 0.557-2.657 1.17 0 0.458 0.385 0.672 0.985 0.672 0.644-0.031 1.225-0.28 1.674-0.675l-0.003 0.003z"
          ></path>
          <path
            d="M14.539 21.331c0.924-0.322 1.371-0.842 1.349-1.475-0.028 0.007-0.061 0.011-0.095 0.011-0.007 0-0.014-0-0.020-0l0.001 0c-0.021 0.001-0.045 0.002-0.069 0.002-0.581 0-1.052-0.471-1.052-1.052 0-0.003 0-0.007 0-0.010v0c0.007-0.593 0.49-1.072 1.085-1.072 0.027 0 0.055 0.001 0.082 0.003l-0.004-0c0.852 0 1.287 0.664 1.287 1.785 0 0.012 0 0.026 0 0.039 0 1.31-0.928 2.403-2.162 2.657l-0.018 0.003z"
          ></path>
          <path
            d="M20.536 19.2h-0.057l-0.171 0.771h-1.643v-10.014h2.1v2.456l-0.071 1.115h0.043c0.502-0.491 1.185-0.798 1.94-0.814l0.003-0c1.771 0 2.857 1.414 2.857 3.586 0 2.442-1.486 3.842-3.071 3.842-0.772-0.040-1.454-0.396-1.926-0.939l-0.003-0.003zM23.379 16.343c0-1.272-0.415-1.915-1.3-1.915-0.531 0.023-0.998 0.273-1.312 0.654l-0.002 0.003v2.872c0.327 0.287 0.757 0.464 1.227 0.47l0.001 0c0.771 0 1.386-0.628 1.386-2.085z"
          ></path>
          <path
            d="M0.346 15.928c-0-0.017-0-0.037-0-0.057 0-5.095 2.284-9.656 5.884-12.716l0.024-0.020 2.296 1.819c-2.929 2.612-4.764 6.396-4.764 10.608 0 0.129 0.002 0.257 0.005 0.385l-0-0.019c-0.003 0.109-0.005 0.237-0.005 0.366 0 4.213 1.835 7.996 4.75 10.596l0.014 0.012-2.296 1.819c-3.624-3.080-5.908-7.641-5.908-12.736 0-0.020 0-0.040 0-0.060v0.003z"
          ></path>
          <path
            d="M23.447 26.902c2.929-2.611 4.764-6.394 4.764-10.606 0-0.129-0.002-0.258-0.005-0.387l0 0.019c0.003-0.11 0.005-0.238 0.005-0.368 0-4.212-1.835-7.995-4.75-10.594l-0.014-0.012 2.296-1.819c3.624 3.102 5.906 7.681 5.906 12.793s-2.282 9.691-5.883 12.774l-0.023 0.019z"
          ></path>
        </symbol>
        <symbol id="flogo-mapper-icon-long" viewBox="0 0 32 32">
          <title>long</title>
          <path d="M8.056 20.2h-5.52v-8.4h1.643v6.936h3.861z"></path>
          <path
            d="M9.233 15.999c-0-0.026-0-0.057-0-0.087 0-0.62 0.070-1.223 0.202-1.803l-0.010 0.054c0.114-0.522 0.318-0.982 0.597-1.387l-0.009 0.013c0.255-0.362 0.588-0.652 0.975-0.851l0.015-0.007c0.388-0.19 0.844-0.3 1.325-0.3 0.026 0 0.051 0 0.077 0.001l-0.004-0c0.028-0.001 0.061-0.001 0.094-0.001 0.499 0 0.971 0.12 1.387 0.334l-0.017-0.008c0.402 0.218 0.731 0.522 0.972 0.89l0.006 0.010c0.255 0.396 0.447 0.858 0.548 1.354l0.004 0.026c0.111 0.511 0.175 1.097 0.175 1.698 0 0.023-0 0.045-0 0.068l0-0.003c0.006 0.095 0.009 0.206 0.009 0.319 0 1.067-0.296 2.066-0.81 2.918l0.014-0.025c-0.49 0.706-1.297 1.163-2.21 1.163-0.060 0-0.12-0.002-0.179-0.006l0.008 0c-0.028 0.001-0.060 0.001-0.092 0.001-0.502 0-0.976-0.12-1.395-0.334l0.017 0.008c-0.404-0.217-0.735-0.522-0.978-0.89l-0.006-0.010c-0.254-0.396-0.444-0.859-0.541-1.355l-0.004-0.025c-0.107-0.51-0.168-1.096-0.168-1.696 0-0.024 0-0.048 0-0.072l-0 0.004zM10.961 15.999q0 0.613 0.053 1.141c0.030 0.338 0.103 0.649 0.213 0.943l-0.008-0.025c0.091 0.248 0.239 0.457 0.43 0.617l0.002 0.002c0.191 0.143 0.432 0.229 0.693 0.229 0.020 0 0.040-0 0.060-0.002l-0.003 0c0.014 0.001 0.031 0.001 0.048 0.001 0.238 0 0.462-0.065 0.653-0.179l-0.006 0.003c0.196-0.131 0.348-0.313 0.441-0.526l0.003-0.008c0.118-0.265 0.201-0.572 0.233-0.894l0.001-0.013c0.043-0.361 0.067-0.778 0.067-1.202 0-0.031-0-0.062-0-0.093l0 0.005c0-0.392-0.014-0.763-0.043-1.116-0.021-0.337-0.090-0.651-0.199-0.946l0.007 0.023c-0.091-0.253-0.242-0.465-0.435-0.628l-0.002-0.002c-0.195-0.147-0.442-0.236-0.709-0.236-0.021 0-0.041 0.001-0.062 0.002l0.003-0c-0.025-0.002-0.055-0.003-0.084-0.003-0.482 0-0.893 0.302-1.054 0.727l-0.003 0.008c-0.194 0.566-0.306 1.218-0.306 1.897 0 0.097 0.002 0.193 0.007 0.289l-0.001-0.014z"
          ></path>
          <path
            d="M18.221 15.232h-0.060l0.072 0.996v3.971h-1.56v-8.4h1.44l2.904 5.135h0.060l-0.108-1.008v-4.128h1.561v8.4h-1.44z"
          ></path>
          <path
            d="M29.743 13.476c-0.816-0.198-1.203-0.27-1.501-0.332-0.154-0.031-0.332-0.048-0.513-0.048-0.005 0-0.011 0-0.016 0h0.001c-0.007-0-0.015-0-0.023-0-0.32 0-0.625 0.062-0.904 0.174l0.016-0.006c-0.289 0.118-0.533 0.296-0.724 0.52l-0.002 0.003c-0.211 0.254-0.374 0.557-0.47 0.889l-0.004 0.017c-0.107 0.369-0.169 0.792-0.169 1.23 0 0.032 0 0.063 0.001 0.095l-0-0.005c-0 0.017-0 0.038-0 0.058 0 0.416 0.062 0.817 0.176 1.195l-0.008-0.029c0.104 0.349 0.265 0.653 0.473 0.917l-0.004-0.006c0.189 0.239 0.428 0.429 0.702 0.559l0.012 0.005c0.265 0.122 0.575 0.193 0.901 0.193 0.2 0 0.394-0.027 0.578-0.076l-0.015 0.004c0.134-0.030 0.252-0.079 0.359-0.146l-0.005 0.003v-1.668h-1.523v-1.201h2.867v3.792c-0.294 0.258-0.65 0.453-1.043 0.561l-0.019 0.004c-0.399 0.121-0.859 0.191-1.334 0.191-0.002 0-0.003 0-0.005 0h0c-0.009 0-0.019 0-0.030 0-0.531 0-1.038-0.101-1.503-0.286l0.028 0.010c-0.48-0.19-0.888-0.474-1.217-0.831l-0.002-0.002c-0.349-0.387-0.627-0.846-0.808-1.352l-0.009-0.028c-0.191-0.541-0.301-1.166-0.301-1.815 0-0.039 0-0.077 0.001-0.116l-0 0.006c-0.001-0.040-0.002-0.087-0.002-0.135 0-0.665 0.133-1.3 0.374-1.878l-0.012 0.032c0.224-0.524 0.539-0.97 0.928-1.337l0.002-0.002c0.356-0.33 0.782-0.59 1.252-0.754l0.025-0.008c0.418-0.15 0.901-0.237 1.404-0.24h0.001c0.030-0.001 0.065-0.001 0.101-0.001 0.389 0 0.768 0.042 1.134 0.121l-0.035-0.006c0.336 0.079 0.629 0.18 0.907 0.307l-0.031-0.012v1.364z"
          ></path>
        </symbol>
      </defs>
    </svg>
  `,
  /* tslint:enable */
})
export class IconsComponent {}
