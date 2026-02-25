import { useState } from 'react';
import imgImageSunsetClouds from "figma:asset/a3f94d76cfcf5e2782e381c52ef2e6d8b48086dc.png";
import imgImageMandalaLogo from "figma:asset/cf90b2f38908ad1b5f862d2b44c565fbba8b9ad0.png";
import imgDiamante1 from "figma:asset/3a2e609fe60cf2e2448ea829f48d156a96788769.png";
import imgImageCloud from "figma:asset/c37ee1ea92828c6b2902260de08d02278b1d1620.png";
import imgImagePlane from "figma:asset/7167be9c3072ecab0ccdb856a187d5c14c2dd81c.png";
import imgImage1 from "figma:asset/8b0e06b67e06b97f5a1f266cbf165eb2767e5b2f.png";
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error('Por favor completa todos los campos');
      return;
    }
    
    // Crear el mailto link con los datos del formulario
    const subject = encodeURIComponent(`Nuevo mensaje de contacto de ${formData.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Email: ${formData.email}\n\n` +
      `Mensaje:\n${formData.mensaje}`
    );
    
    const mailtoLink = `mailto:luzen.coach@gmail.com?subject=${subject}&body=${body}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    toast.success('¡Abriendo tu cliente de correo para enviar el mensaje!');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-[500px] md:h-[643px] overflow-hidden relative w-full">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Background Image Right Side */}
          <div className="absolute h-[643px] left-[608px] top-0 w-[911px]">
            <div className="absolute h-[643px] left-0 top-0 w-[912px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSunsetClouds} />
            </div>
            <div className="absolute bg-[rgba(0,0,0,0.1)] h-[643px] left-0 top-0 w-[912px]" />
            
            {/* Navigation Header */}
            <div className="absolute content-stretch flex gap-[8px] h-[33.588px] items-start left-[359.64px] top-[32px] w-[519.875px] z-10">
              <button 
                onClick={() => scrollToSection('coaching-info')}
                className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[193.45px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center">
                  <p className="font-['Arial:Bold',sans-serif] leading-[16px] not-italic text-[#222] text-[12px] tracking-[0.6px] uppercase">Tu Coach o tu mentor?</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('servicios')}
                className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[104.575px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center">
                  <p className="font-['Arial:Bold',sans-serif] leading-[16px] not-italic text-[#222] text-[12px] tracking-[0.6px] uppercase">Proyectos</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('coaching-info')}
                className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[97.588px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center">
                  <p className="font-['Arial:Bold',sans-serif] leading-[16px] not-italic text-[#222] text-[12px] tracking-[0.6px] uppercase">Recursos</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[rgba(252,209,22,0.6)] h-[33.588px] relative rounded-[16px] shrink-0 w-[100.263px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,209,22,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center">
                  <p className="font-['Arial:Bold',sans-serif] leading-[16px] not-italic text-[#222] text-[12px] tracking-[0.6px] uppercase">Contacto</p>
                </div>
              </button>
            </div>
          </div>

          {/* Left Content */}
          <div className="absolute bg-[#666] content-stretch flex flex-col h-[643px] items-start justify-center left-0 pl-[80px] top-0 w-[608px]">
            <div className="h-[349px] relative shrink-0 w-[448px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                {/* Logo and Title Container */}
                <div className="absolute content-stretch flex h-[168px] items-center left-[-13px] top-[-110px] w-[683px]">
                  <div className="h-[168px] relative shrink-0 w-[544px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Spirax:Regular',sans-serif] leading-[0] left-0 not-italic text-[#f0e] text-[0px] text-[128px] top-[-1px] tracking-[-2.8px] w-[888px] whitespace-pre-wrap">
                        <span className="leading-[168px]">Paz</span>
                        <span className="leading-[168px] text-[#ff7f50]">~</span>
                        <span className="leading-[168px] text-[#dc143c]">100</span>
                        <span className="leading-[168px] text-[#ff088c]">xia</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mandala Logo */}
                <div className="absolute h-[261px] left-[-13px] top-[71px] w-[203px]">
                  <img alt="Mandala Logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageMandalaLogo} />
                </div>

                {/* Main Text */}
                <div className="-translate-y-1/2 absolute flex flex-col font-['Tahoma:Bold',sans-serif] font-['Walter_Turncoat:Regular',sans-serif] h-[233px] justify-center leading-[0] left-[229px] not-italic text-[0px] text-[40px] text-[rgba(255,0,166,0.94)] top-[187.5px] w-[1015px] whitespace-pre-wrap">
                  <p className="mb-0">
                    <span className="leading-[66px]">{`SERVICIOS DE  `}</span>
                    <span className="leading-[66px] text-[rgba(255,209,23,0.98)]">COACHING TERÁPIAS</span>
                    <span className="leading-[66px]">{` `}</span>
                  </p>
                  <p className="leading-[66px] mb-0">Y ASESORIAS</p>
                  <p className="leading-[66px]">INTEGRALES</p>
                </div>

                {/* Description */}
                <p className="absolute font-['Platypi:Regular',sans-serif] font-normal h-[132px] leading-[44px] left-[-13px] text-[#fffdd0] text-[24px] top-[345px] w-[461px] whitespace-pre-wrap">La ciencia de la paz. Es un programa personalizado. Una forma de vida, un nuevo camino al éxito y la realización.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden bg-[#666] min-h-[500px] py-12 px-6">
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            {/* Mobile Navigation */}
            <div className="flex flex-wrap gap-2 justify-center w-full">
              <button 
                onClick={() => scrollToSection('coaching-info')}
                className="bg-[rgba(252,209,22,0.6)] px-4 py-2 rounded-[16px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <p className="font-['Arial:Bold',sans-serif] text-[#222] text-[10px] tracking-[0.6px] uppercase">Coach/Mentor</p>
              </button>
              
              <button 
                onClick={() => scrollToSection('servicios')}
                className="bg-[rgba(252,209,22,0.6)] px-4 py-2 rounded-[16px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <p className="font-['Arial:Bold',sans-serif] text-[#222] text-[10px] tracking-[0.6px] uppercase">Proyectos</p>
              </button>
              
              <button 
                onClick={() => scrollToSection('coaching-info')}
                className="bg-[rgba(252,209,22,0.6)] px-4 py-2 rounded-[16px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <p className="font-['Arial:Bold',sans-serif] text-[#222] text-[10px] tracking-[0.6px] uppercase">Recursos</p>
              </button>
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[rgba(252,209,22,0.6)] px-4 py-2 rounded-[16px] hover:bg-[rgba(252,209,22,0.8)] transition-colors cursor-pointer"
              >
                <p className="font-['Arial:Bold',sans-serif] text-[#222] text-[10px] tracking-[0.6px] uppercase">Contacto</p>
              </button>
            </div>

            {/* Logo */}
            <div className="w-32 h-32">
              <img alt="Mandala Logo" className="w-full h-full object-contain" src={imgImageMandalaLogo} />
            </div>

            {/* Title */}
            <div className="text-center">
              <p className="font-['Spirax:Regular',sans-serif] text-[48px] leading-[60px] tracking-[-1px]">
                <span className="text-[#f0e]">Paz</span>
                <span className="text-[#ff7f50]">~</span>
                <span className="text-[#dc143c]">100</span>
                <span className="text-[#ff088c]">xia</span>
              </p>
            </div>

            {/* Main Text */}
            <div className="text-center">
              <p className="font-['Walter_Turncoat:Regular',sans-serif] text-[20px] leading-[28px] text-[rgba(255,0,166,0.94)]">
                SERVICIOS DE <span className="text-[rgba(255,209,23,0.98)]">COACHING TERÁPIAS</span>
              </p>
              <p className="font-['Walter_Turncoat:Regular',sans-serif] text-[20px] leading-[28px] text-[rgba(255,0,166,0.94)]">
                Y ASESORIAS INTEGRALES
              </p>
            </div>

            {/* Description */}
            <p className="font-['Platypi:Regular',sans-serif] text-[16px] leading-[24px] text-[#fffdd0] text-center">
              La ciencia de la paz. Es un programa personalizado. Una forma de vida, un nuevo camino al éxito y la realización.
            </p>

            {/* Background Image */}
            <div className="w-full h-48 rounded-lg overflow-hidden mt-4">
              <img alt="" className="w-full h-full object-cover" src={imgImageSunsetClouds} />
            </div>
          </div>
        </div>
      </section>

      {/* Conversemos Button - Fixed Floating */}
      <button 
        onClick={() => scrollToSection('contacto')}
        className="fixed bg-[#fcd116] flex h-[60px] md:h-[84px] items-center justify-center px-[24px] md:px-[40px] py-[16px] md:py-[24px] rounded-full shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] bottom-[20px] md:bottom-[40px] right-[20px] md:right-[40px] hover:bg-[#e5bd00] hover:scale-105 transition-all cursor-pointer z-50"
      >
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] md:leading-[36px] not-italic text-[#222] text-[18px] md:text-[30px] text-center whitespace-nowrap">Conversemos</p>
      </button>

      {/* Servicios Section */}
      <section id="servicios" className="bg-[#757575] min-h-[400px] py-12 md:py-16 relative w-full">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-8 md:gap-12 items-center">
            {/* Heading */}
            <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[#ff7f50] text-[28px] md:text-[72px] leading-[36px] md:leading-[72px] text-center">
              Asesoría?, integral?...
            </h2>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full max-w-6xl">
              {/* Terrenal */}
              <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img alt="Diamante" className="w-full h-full object-cover" src={imgDiamante1} />
                </div>
                <h3 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[#ff7f50] text-[36px] md:text-[48px] leading-[40px]">
                  Terrenal
                </h3>
                <p className="font-['Arial:Regular',sans-serif] text-[#d1d5dc] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
                  Negocios, Empresa, Emprendimientos, Finanzas, Inversiones, Acciones, Forex y Cripto: CFDs - Plataforma de Trading
                </p>
              </div>

              {/* Espiritual */}
              <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img alt="Cloud" className="w-full h-full object-contain" src={imgImageCloud} />
                </div>
                <h3 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[#ff7f50] text-[36px] md:text-[48px] leading-[40px]">
                  Espiritual
                </h3>
                <p className="font-['Arial:Regular',sans-serif] text-[#d1d5dc] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
                  Mindfullness, Relajación, Meditación, Terapias Antiestrés, Yoga, Sauna, Termas y Masajes
                </p>
              </div>

              {/* Recreacional */}
              <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24">
                  <img alt="Plane" className="w-full h-full object-contain" src={imgImagePlane} />
                </div>
                <h3 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[#ff7f50] text-[36px] md:text-[48px] leading-[40px]">
                  Recreacional
                </h3>
                <p className="font-['Arial:Regular',sans-serif] text-[#d1d5dc] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
                  Acondicionamiento físico, salidas grupales de trekking, rafting y MTB, conversatorios motivacionales en ambientes naturales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Info Section */}
      <section id="coaching-info" className="bg-[#e5e7eb] py-12 md:py-16 relative w-full">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-6 md:gap-8 max-w-2xl">
              {/* Heading */}
              <h2 className="font-['Walter_Turncoat:Regular',sans-serif] text-[#2b6cb0] text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] text-center lg:text-left">
                ¿Qué es el Coaching Integral?
              </h2>

              {/* Paragraph */}
              <p className="font-['Briem_Hand:Bold',sans-serif] font-bold text-[#4a5565] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-center lg:text-left">
                "Integral" es una palabra que significa lo que incluye todo, lo entero, lo completo. El Integral Coaching, según la escuela ICC (Integral Coaching Canada), se refiere a una variante de coaching que es total, completa e integrada.
              </p>

              {/* Info Card */}
              <div className="bg-white rounded-[16px] shadow-lg border-l-4 border-[#ff7f50] p-6 md:p-8">
                <h3 className="font-['Walter_Turncoat:Regular',sans-serif] text-[#2b6cb0] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] mb-4 text-center lg:text-left">
                  ¿Cómo funciona el método?
                </h3>
                <p className="font-['Briem_Hand:Regular',sans-serif] text-[#4a5565] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-center lg:text-left">
                  El método Coaching Integral permite bucear bajo cualquier tema de coaching para ver cómo el cliente lo ha ido enfocando hasta ahora. Apoya al cliente a identificar y trabajar creencias y patrones arraigados, y a desarrollar la capacidad de moverse en nuevas direcciones.
                </p>
              </div>
            </div>

            {/* Side Image */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <div className="w-full max-w-sm mx-auto lg:w-[350px] xl:w-[456px] h-[400px] md:h-[500px] lg:h-[687px] rounded-[32px] md:rounded-[66px] overflow-hidden">
                <img alt="Coaching" className="w-full h-full object-cover" src={imgImage1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-[#333] py-12 md:py-16 relative w-full min-h-[600px]">
        {/* Background */}
        <div className="absolute inset-0 opacity-40">
          <img alt="" className="w-full h-full object-cover" src={imgImageSunsetClouds} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,34,34,0.9)] to-[#222] via-1/2 via-[rgba(51,51,51,0.8)]" />

        {/* Contact Form Container */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Heading */}
            <h2 className="font-['Times_New_Roman:Regular',sans-serif] text-[#ff7f50] text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] text-center">
              Contacto
            </h2>

            {/* Form Container */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[24px] border border-[rgba(255,255,255,0.2)] shadow-2xl p-6 md:p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Arial:Regular',sans-serif] text-[#d1d5dc] text-[14px]">
                      Nombre
                    </label>
                    <div className="bg-[rgba(0,0,0,0.2)] rounded-[10px] border border-[rgba(255,255,255,0.1)]">
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        placeholder="Tu nombre"
                        className="font-['Arial:Regular',sans-serif] text-[16px] text-white bg-transparent border-none outline-none w-full px-4 py-3 placeholder:text-[rgba(255,255,255,0.5)]"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Arial:Regular',sans-serif] text-[#d1d5dc] text-[14px]">
                      Email
                    </label>
                    <div className="bg-[rgba(0,0,0,0.2)] rounded-[10px] border border-[rgba(255,255,255,0.1)]">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="tucorreo@ejemplo.com"
                        className="font-['Arial:Regular',sans-serif] text-[16px] text-white bg-transparent border-none outline-none w-full px-4 py-3 placeholder:text-[rgba(255,255,255,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Message TextArea */}
                <div className="flex flex-col gap-2">
                  <label className="font-['Arial:Regular',sans-serif] text-[#d1d5dc] text-[14px]">
                    Mensaje
                  </label>
                  <div className="bg-[rgba(0,0,0,0.2)] rounded-[10px] border border-[rgba(255,255,255,0.1)]">
                    <textarea
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      className="font-['Arial:Regular',sans-serif] text-[16px] leading-[24px] text-white bg-transparent border-none outline-none w-full px-4 py-3 resize-none placeholder:text-[rgba(255,255,255,0.5)]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                  <button 
                    type="submit"
                    className="bg-[#fcd116] h-[60px] rounded-full shadow-lg px-8 md:px-12 hover:bg-[#e5bd00] hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                  >
                    <p className="font-['Arial:Bold',sans-serif] font-bold text-[#222] text-[18px] md:text-[22px] whitespace-nowrap">
                      Enviar Mensaje
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-12 relative w-full border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 items-center text-center">
            <p className="font-['Times_New_Roman:Bold',sans-serif] text-white text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]">
              Paz~100xia
            </p>
            <p className="font-['Arial:Regular',sans-serif] text-[#6a7282] text-[14px] leading-[20px]">
              Servicios de coaching y asesorías integrales
            </p>
            <p className="font-['Arial:Regular',sans-serif] text-[#4a5565] text-[12px] leading-[16px]">
              © 2026 Paz~100xia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}