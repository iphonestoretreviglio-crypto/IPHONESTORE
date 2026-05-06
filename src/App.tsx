/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Smartphone, 
  RefreshCcw, 
  Headphones, 
  Wrench, 
  MessageCircle, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Search,
  ShoppingBag
} from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "3773461222";
const STORE_ADDRESS = "Viale del Partigiano 32, Treviglio";

const IPHONE_MODELS = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
  "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7",
  "iPhone 6s Plus", "iPhone 6s", "iPhone 6 Plus", "iPhone 6",
  "iPhone SE (3a gen)", "iPhone SE (2a gen)", "iPhone SE (1a gen)",
  "Altro modello"
];

const REPAIR_TYPES = [
  { id: 'screen', label: 'Schermo rotto / Display', icon: Smartphone },
  { id: 'battery', label: 'Sostituzione Batteria', icon: RefreshCcw },
  { id: 'camera', label: 'Fotocamera / Vetro Camera', icon: Headphones },
  { id: 'charging', label: 'Connettore di ricarica', icon: RefreshCcw },
  { id: 'water', label: 'Danni da liquidi', icon: RefreshCcw },
  { id: 'other', label: 'Altro problema', icon: Wrench },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppInquiry = () => {
    if (!selectedModel || !selectedIssue) return;
    const text = encodeURIComponent(`Ciao IPHONESTORE! Vorrei un preventivo per la riparazione del mio ${selectedModel}. Il problema è: ${selectedIssue}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 apple-blur ${scrolled ? 'h-12 border-b border-gray-100' : 'h-14 border-b border-gray-100/50'}`}>
        <div className="max-w-5xl mx-auto h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tighter text-xl">
              <img 
                src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/242027440_103624318738745_5369194809077278931_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=5XR_xl7LbB4Q7kNvwEDRGDy&_nc_oc=AdruOcXIMnfXExCQ9WG5-SU6G3yYpIPeLhqhwywXn8tLcr1T55IluCJAyxq3g_0ZXMKRtg4zVQ0LJoZIys5dozaI&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=nsYw-T9fKAdmbWWS_pPwhA&_nc_ss=7b2a8&oh=00_Af6PJKqmafVD2qBALvtFnJAvduug9CUVZ8JHYcj4BlZVJw&oe=6A00D828" 
                alt="IPHONESTORE" 
                className="h-8 md:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="hidden md:flex gap-6 text-xs font-medium text-gray-800">
              <a href="#riparazioni" className="opacity-80 hover:opacity-100 transition-opacity">Riparazioni</a>
              <a href="#dove-siamo" className="opacity-80 hover:opacity-100 transition-opacity">Dove Siamo</a>
              <a href="#contatti" className="opacity-80 hover:opacity-100 transition-opacity">Contatti</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors"
            >
              WhatsApp
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: isMenuOpen ? '100vh' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="fixed inset-0 bg-white z-40 md:hidden overflow-hidden flex flex-col pt-20 px-10 gap-6 text-2xl font-semibold"
      >
        <a href="#riparazioni" onClick={() => setIsMenuOpen(false)}>Riparazioni</a>
        <a href="#dove-siamo" onClick={() => setIsMenuOpen(false)}>Dove Siamo</a>
        <a href="#contatti" onClick={() => setIsMenuOpen(false)}>Contatti</a>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black flex flex-col items-center justify-center text-center text-white pt-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 px-4 flex flex-col items-center"
        >
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/242027440_103624318738745_5369194809077278931_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=5XR_xl7LbB4Q7kNvwEDRGDy&_nc_ohc=5XR_xl7LbB4Q7kNvwEDRGDy&_nc_oc=AdruOcXIMnfXExCQ9WG5-SU6G3yYpIPeLhqhwywXn8tLcr1T55IluCJAyxq3g_0ZXMKRtg4zVQ0LJoZIys5dozaI&_nc_zt=23&_nc_ht=scontent-mxp2-1.xx&_nc_gid=nsYw-T9fKAdmbWWS_pPwhA&_nc_ss=7b2a8&oh=00_Af6PJKqmafVD2qBALvtFnJAvduug9CUVZ8JHYcj4BlZVJw&oe=6A00D828" 
            alt="IPHONESTORE Logo" 
            className="w-32 md:w-48 h-auto object-contain mb-8 rounded-2xl shadow-2xl border border-white/20"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Riparazione iPhone</h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 max-w-2xl mx-auto">
            Il tuo iPhone è in buone mani. Riparazioni professionali a Treviglio con ricambi di alta qualità.
          </p>
          <a href="#configuratore" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block">
            Calcola Preventivo
          </a>
        </motion.div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white"></div>
      </section>

      {/* Repair Configurator */}
      <section id="riparazioni" className="py-24 px-4 max-w-5xl mx-auto">
        <div id="configuratore" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Di cosa ha bisogno il tuo iPhone?</h2>
          <p className="text-xl text-gray-500 font-light">Seleziona il modello e il tipo di intervento per ricevere assistenza.</p>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1: Model Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">1. Seleziona Modello</label>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {IPHONE_MODELS.map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelectedModel(model)}
                    className={`w-full text-left px-6 py-4 rounded-2xl border transition-all duration-200 ${
                      selectedModel === model 
                        ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold' 
                        : 'border-gray-100 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Issue Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">2. Qual è il problema?</label>
              <div className="grid grid-cols-1 gap-2">
                {REPAIR_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedIssue(type.label)}
                    className={`flex items-center gap-4 w-full text-left px-6 py-4 rounded-2xl border transition-all duration-200 ${
                      selectedIssue === type.label 
                        ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold' 
                        : 'border-gray-100 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <type.icon className={`w-5 h-5 ${selectedIssue === type.label ? 'text-blue-500' : 'text-gray-400'}`} />
                    {type.label}
                  </button>
                ))}
              </div>
              
              {/* Summary & Call to Action */}
              <motion.div 
                className="mt-8 pt-8 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {selectedModel && selectedIssue ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Hai selezionato: <span className="font-bold text-black">{selectedModel}</span> - <span className="font-bold text-black">{selectedIssue}</span>
                    </p>
                    <button 
                      onClick={handleWhatsAppInquiry}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-6 h-6" />
                      Richiedi Preventivo su WhatsApp
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm italic">Completa la selezione per procedere</p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualità Garantita</h3>
              <p className="text-gray-500 text-sm">Utilizziamo solo i migliori componenti per garantire la massima longevità al tuo dispositivo.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Riparazioni in 60'</h3>
              <p className="text-gray-500 text-sm">Molti degli interventi standard vengono effettuati in meno di un'ora presso il nostro store.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Assistenza Completa</h3>
              <p className="text-gray-500 text-sm">Dal trasferimento dati al backup, ti supportiamo in ogni fase dell'utilizzo del tuo iPhone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="dove-siamo" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto md:mx-0" />
            <h2 className="text-4xl font-bold tracking-tight">IPHONESTORE Treviglio</h2>
            <p className="text-xl text-gray-500 font-light">Ci trovi in {STORE_ADDRESS}.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                Ottieni Indicazioni
              </a>
              <a 
                href={`tel:${WHATSAPP_NUMBER}`}
                className="bg-gray-100 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                Chiama Store
              </a>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=1200" 
              alt="Store Location" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">Servizi</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Riparazione Schermo</li>
                <li>Sostituzione Batteria</li>
                <li>Riparazione Fotocamera</li>
                <li>Recupero Dati</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">Contatti</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>{STORE_ADDRESS}</li>
                <li>Treviglio (BG)</li>
                <li>WhatsApp: {WHATSAPP_NUMBER}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-gray-400">Social</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://www.instagram.com/iphonestore_treviglio/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100072735310778" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="text-[10px] text-gray-400 pt-8 border-t border-gray-200">
            <p>© 2026 IPHONESTORE Treviglio. Apple, iPhone e il logo Apple sono marchi di Apple Inc. IPHONESTORE è un centro assistenza indipendente di alta qualità.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <motion.a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
          Chiedi Assistenza
        </span>
      </motion.a>
    </div>
  );
}
