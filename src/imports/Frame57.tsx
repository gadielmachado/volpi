function Frame14() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[14.041px] h-[53.045px] items-center justify-center ml-0 mt-0 p-0 relative w-[221.543px]">
      <div className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[31.2032px] text-center text-nowrap">
        <p className="block leading-[80.8944px] whitespace-pre">
          Leonardo Volpi
        </p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame14 />
    </div>
  );
}

export default function Frame57() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[65px] items-center justify-start p-0 relative size-full">
      <div
        className="flex items-center justify-center relative shrink-0 w-full"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "0",
            height:
              "calc(1px * ((var(--transform-inner-width) * 0.002349249552935362) + (var(--transform-inner-height) * 0.9999971985816956)))",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.135deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1277 1"
              >
                <line
                  id="Line 12"
                  stroke="var(--stroke-0, white)"
                  strokeOpacity="0.4"
                  x2="1277"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Inter:Light_Italic',_sans-serif] font-light h-[189px] italic leading-[0] relative shrink-0 text-[#ffffff] text-[28px] text-center w-[1041px]">
        <p className="block leading-[41.35px]">{`"Após décadas de atuação no mercado financeiro, criei a VOLPI Investments LLC com um propósito claro: proporcionar aos investidores brasileiros uma porta segura e altamente rentável para o mercado imobiliário americano. Nosso compromisso é com a excelência e a transparência em cada investimento."`}</p>
      </div>
      <Group5 />
    </div>
  );
}