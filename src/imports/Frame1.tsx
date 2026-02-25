import imgImageSunsetClouds from "figma:asset/a3f94d76cfcf5e2782e381c52ef2e6d8b48086dc.png";
import imgImageMandalaLogo from "figma:asset/cf90b2f38908ad1b5f862d2b44c565fbba8b9ad0.png";
import imgDiamante1 from "figma:asset/3a2e609fe60cf2e2448ea829f48d156a96788769.png";
import imgImageCloud from "figma:asset/c37ee1ea92828c6b2902260de08d02278b1d1620.png";
import imgImagePlane from "figma:asset/7167be9c3072ecab0ccdb856a187d5c14c2dd81c.png";
import imgImage1 from "figma:asset/8b0e06b67e06b97f5a1f266cbf165eb2767e5b2f.png";

function Link() {
  return (
    <div className="absolute bg-[#fcd116] content-stretch flex h-[84px] items-start left-[1169px] px-[40px] py-[24px] rounded-[26843500px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[623px] w-[280.913px]" data-name="Link">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#222] text-[30px] text-center">Conversemos</p>
    </div>
  );
}

function ImageSunsetClouds() {
  return (
    <div className="absolute h-[643px] left-0 top-0 w-[912px]" data-name="Image (Sunset Clouds)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSunsetClouds} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[643px] left-0 top-0 w-[912px]" data-name="Container" />;
}

function Link1() {
  return (
    <div className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[193.45px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[16.8px] not-italic text-[#222] text-[12px] top-[7.8px] tracking-[0.6px] uppercase">Tu Coach o tu mentor?</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[104.575px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[16.8px] not-italic text-[#222] text-[12px] top-[7.8px] tracking-[0.6px] uppercase">Proyectos</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[97.588px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[16.8px] not-italic text-[#222] text-[12px] top-[7.8px] tracking-[0.6px] uppercase">Recursos</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[100.263px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[16px] left-[16.8px] not-italic text-[#222] text-[12px] top-[7.8px] tracking-[0.6px] uppercase">Contacto</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[33.588px] items-start left-[359.64px] top-[32px] w-[519.875px]" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[643px] left-[608px] top-0 w-[911px]" data-name="Container">
      <ImageSunsetClouds />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[168px] relative shrink-0 w-[544px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Spirax:Regular',sans-serif] leading-[0] left-0 not-italic text-[#f0e] text-[0px] text-[128px] top-[-1px] tracking-[-2.8px] w-[888px] whitespace-pre-wrap">
          <span className="leading-[168px]">Paz</span>
          <span className="leading-[168px] text-[#ff7f50]">~</span>
          <span className="leading-[168px] text-[#dc143c]">100</span>
          <span className="leading-[168px] text-[#ff088c]">xia</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[168px] items-center left-[-13px] top-[-110px] w-[683px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Heading1() {
  return <div className="absolute h-[135px] left-0 top-[183.9px] w-[694px]" data-name="Heading 2" />;
}

function ImageMandalaLogo() {
  return (
    <div className="absolute h-[261px] left-[-13px] top-[71px] w-[203px]" data-name="Image (Mandala Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMandalaLogo} />
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[120px] left-[6px] top-[416.9px] w-[384px]" data-name="Paragraph" />;
}

function Container4() {
  return (
    <div className="h-[349px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
        <Heading1 />
        <ImageMandalaLogo />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Tahoma:Bold',sans-serif] font-['Walter_Turncoat:Regular',sans-serif] h-[233px] justify-center leading-[0] left-[229px] not-italic text-[0px] text-[40px] text-[rgba(255,0,166,0.94)] top-[187.5px] w-[1015px] whitespace-pre-wrap">
          <p className="mb-0">
            <span className="leading-[66px]">{`SERVICIOS DE  `}</span>
            <span className="leading-[66px] text-[rgba(255,209,23,0.98)]">COACHING TERÁPIAS</span>
            <span className="leading-[66px]">{` `}</span>
          </p>
          <p className="leading-[66px] mb-0">Y ASESORIAS</p>
          <p className="leading-[66px]">INTEGRALES</p>
        </div>
        <Paragraph />
        <p className="absolute font-['Platypi:Regular',sans-serif] font-normal h-[132px] leading-[44px] left-[-13px] text-[#fffdd0] text-[24px] top-[345px] w-[461px] whitespace-pre-wrap">La ciencia de la paz. Es un programa personalizado. Una forma de vida, un nuevo camino al éxito y la realización.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#666] content-stretch flex flex-col h-[643px] items-start justify-center left-0 pl-[80px] top-0 w-[608px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[643px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container />
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[72px] left-0 text-[#ff7f50] text-[72px] top-0">Asesoría?, integral?...</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[229px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#ff7f50] text-[64px] top-0">Terrenal</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-[384px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#d1d5dc] text-[24px] top-[-1.6px] w-[363px] whitespace-pre-wrap">Negocios, Empresa, Emprendimientos, Finanzas, Inversiones, Acciones, Forex y Cripto: CFDs - Plataforma de Trading</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] h-[335px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="h-[96px] relative shrink-0 w-[106px]" data-name="diamante 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiamante1} />
      </div>
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function ImageCloud() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Image (Cloud)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCloud} />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[191.887px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#ff7f50] text-[64px] top-0">Espiritual</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-[384px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#d1d5dc] text-[24px] top-[-1.6px] w-[339px] whitespace-pre-wrap">Mindfullness, Relajación, Meditación, Terapias Antiestrés, Yoga, Sauna, Termas y Masajes</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <ImageCloud />
      <Heading4 />
      <Paragraph2 />
    </div>
  );
}

function ImagePlane() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Image (Plane)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePlane} />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[241.925px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#ff7f50] text-[64px] top-0">Recreacional</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-[384px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#d1d5dc] text-[24px] top-[-1.6px] w-[340px] whitespace-pre-wrap">Acondicionamiento físico, salidas grupales de trekking, rafting y MTB, conversatorios motivacionales en ambientes naturales</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <ImagePlane />
      <Heading5 />
      <Paragraph3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[263.75px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[493px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#757575] h-[561px] relative shrink-0 w-full" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[33px] pl-[88px] pr-[33px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[74px] relative shrink-0 w-[636px]" data-name="Heading 2">
      <p className="absolute font-['Walter_Turncoat:Regular',sans-serif] leading-[48px] left-[-29px] not-italic text-[#2b6cb0] text-[48px] top-0 w-[725px] whitespace-pre-wrap">¿Qué es el Coaching Integral?</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[150px] relative shrink-0 w-[704px]" data-name="Paragraph">
      <p className="absolute font-['Briem_Hand:Bold',sans-serif] font-bold leading-[32.5px] left-0 text-[#4a5565] text-[24px] top-[-27px] w-[621px] whitespace-pre-wrap">{`"Integral" es una palabra que significa lo que incluye todo, lo entero, lo completo. El Integral Coaching, según la escuela ICC (Integral Coaching Canada), se refiere a una variante de coaching que es total, completa e integrada.`}</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Walter_Turncoat:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#2b6cb0] text-[40px] whitespace-pre-wrap">¿Cómo funciona el método?</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Briem_Hand:Regular',sans-serif] font-normal h-[201px] leading-[33px] left-[-14px] text-[#4a5565] text-[24px] top-[-8.99px] w-[581px] whitespace-pre-wrap">El método Coaching Integral permite bucear bajo cualquier tema de coaching para ver cómo el cliente lo ha ido enfocando hasta ahora. Apoya al cliente a identificar y trabajar creencias y patrones arraigados, y a desarrollar la capacidad de moverse en nuevas direcciones.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[284px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff7f50] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[36px] pr-[32px] pt-[32px] relative size-full">
        <Heading7 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[606px] items-start left-[112px] top-[58.8px] w-[672px]" data-name="Container">
      <Heading6 />
      <Paragraph4 />
      <Container12 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#e5e7eb] h-[713.987px] relative shrink-0 w-full" data-name="Section">
      <Container11 />
      <div className="absolute h-[687px] left-[868px] rounded-[66px] top-[13.05px] w-[456px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[66px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function ImageBackground() {
  return (
    <div className="absolute h-[742.4px] left-0 opacity-40 top-0 w-[1519.2px]" data-name="Image (Background)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSunsetClouds} />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-b from-[rgba(34,34,34,0.9)] h-[742.4px] left-0 to-[#222] top-0 via-1/2 via-[rgba(51,51,51,0.8)] w-[1519.2px]" data-name="Container" />;
}

function Heading8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Times_New_Roman:Regular',sans-serif] leading-[48px] left-[431.96px] not-italic text-[#ff7f50] text-[48px] text-center top-[0.8px]">Contacto</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1.2px]">Nombre</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[49.6px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]">Tu nombre</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[77.6px] items-start left-0 top-0 w-[371.2px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1.2px]">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[49.6px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]">tucorreo@ejemplo.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[77.6px] items-start left-[395.2px] top-0 w-[371.2px]" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[77.6px] left-0 top-0 w-[766.4px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1.2px]">Mensaje</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[121.6px] relative rounded-[10px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]">¿En qué podemos ayudarte?</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[155.2px] items-start left-0 top-[101.6px] w-[766.4px]" data-name="Container">
      <Label2 />
      <TextArea />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#fcd116] h-[60px] left-[279.46px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[296.8px] w-[207.475px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arial:Bold',sans-serif] leading-[28px] left-[104px] not-italic text-[#222] text-[18px] text-center top-[14.6px]">Enviar Mensaje</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[356.8px] relative shrink-0 w-full" data-name="Form">
      <Container16 />
      <Container19 />
      <Button />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[454.4px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[48.8px] px-[48.8px] relative size-full">
        <Form />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[550.4px] items-start left-[311.6px] px-[16px] top-[96px] w-[896px]" data-name="Container">
      <Heading8 />
      <Container15 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#333] h-[742.4px] relative shrink-0 w-full" data-name="Section">
      <ImageBackground />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[142.913px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Times_New_Roman:Bold',sans-serif] leading-[32px] left-[71.5px] not-italic text-[24px] text-center text-white top-[-0.4px]">Paz~100xia</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[267.1px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[134.5px] not-italic text-[#6a7282] text-[14px] text-center top-[-1.2px]">Servicios de coaching y asesorías integrales</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[273.113px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">© 2026 Paz~100xia. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[115.975px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#111] h-[212.775px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[48.8px] px-[151.6px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function PK() {
  return (
    <div className="bg-[#333] content-stretch flex flex-col h-[3052.113px] items-start relative shrink-0 w-full" data-name="pK">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

function BuildCoachingServicesSite() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[3052px] items-start left-0 top-0 w-[1519px]" data-name="Build Coaching Services Site">
      <PK />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Link />
      <BuildCoachingServicesSite />
    </div>
  );
}