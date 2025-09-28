// pc-components.jsx

// Default Images
import defaultImage1 from '../assets/default/processor-default.png';
import defaultImage2 from '../assets/default/gpu-default.png';
import defaultImage3 from '../assets/default/ram-default.png';
import defaultImage4 from '../assets/default/motherboard-default.png';
import defaultImage5 from '../assets/default/powersupply-default.png';
import defaultImage6 from '../assets/default/ssd-default.png';
import defaultImage7 from '../assets/default/fan-default.png';
import defaultImage8 from '../assets/default/cooler-default.png';

// Gaming Images
import gamingImage1 from '../assets/gaming/processor-gaming.png';
import gamingImage2 from '../assets/gaming/gpu-gaming.png';
import gamingImage3 from '../assets/gaming/ram-gaming.png';
import gamingImage4 from '../assets/gaming/motherboard-gaming.png';
import gamingImage5 from '../assets/gaming/powersupply-gaming.png';
import gamingImage6 from '../assets/gaming/ssd-gaming.png';
import gamingImage7 from '../assets/gaming/fan-gaming.png';
import gamingImage8 from '../assets/gaming/cooler-gaming.png';

// School Images
import schoolImage1 from '../assets/school/processor-school.png';
import schoolImage2 from '../assets/school/gpu-school-mid.png';
import schoolImage3 from '../assets/school/ram-school-mid.png';
import schoolImage4 from '../assets/school/motherboard-school-mid.png';
import schoolImage5 from '../assets/school/powersupply-school-mid.png';
import schoolImage6 from '../assets/school/ssd-school-mid.png';
import schoolImage7 from '../assets/school/fan-school-mid.png';
import schoolImage8 from '../assets/school/cooler-school-mid.png';

// Work Images
import workImage1 from '../assets/work/processor-work.png';
import workImage2 from '../assets/work/gpu-work.png';
import workImage3 from '../assets/work/ram-work.png';
import workImage4 from '../assets/work/motherboard-work.png';
import workImage5 from '../assets/work/powersupply-work.png';
import workImage6 from '../assets/work/ssd-work.png';
import workImage7 from '../assets/work/fan-work.png';
import workImage8 from '../assets/work/cooler-work.png';

// Data for different usage types with corresponding gauge options
export const gaugeOptions = {
    default: [
        { img: defaultImage1, label: "Intel Core i5-14600KF 24mb 5.30GHz LGA 1700 14TH Gen Processor" },
        { img: defaultImage2, label: "Gigabyte RTX 4070 Super Eagle OC 12GB Graphics Card " },
        { img: defaultImage3, label: "Kingston Fury Beast RGB 32G 16x2 DDR5 5600MHz CL36 KF556C36BBEAK2-32" },
        { img: defaultImage4, label: "Asus Prime A520M-K/CSM (AM4) Motherboard" },
        { img: defaultImage5, label: "ACE 700W Black ATX Gaming PC PSU Power Supply " },
        { img: defaultImage6, label: "Internal SSD - NVMe M.2 2280 - 500GB - Kioxia Exceria G2" },
        { img: defaultImage7, label: "Corsair Air Series™ AF140 Quiet Edition High Airflow" },
        { img: defaultImage8, label: "Cooler Master Hyper 620S Dual Tower ARGB CPU Air Cooler" }
    ],
    gaming: [
        { img: gamingImage1, label: "Intel Core i3-14100 14TH Gen Processor" },
        { img: gamingImage2, label: "GeForce® GTX 1060 WINDFORCE OC 3G" },
        { img: gamingImage3, label: "Ram Kingbank DDR4 PC 3200MHz 16GB" },
        { img: gamingImage4, label: "Asus Prime H610M-K D4 ATX Motherboard" },
        { img: gamingImage5, label: "ACE 700W Black ATX Gaming PC PSU Power Supply " },
        { img: gamingImage6, label: "Kioxia RC10 RC20 SSD 1TB NVMe M.2  EXCERIA G2 RC20 Series" },
        { img: gamingImage7, label: "Gaming FanCorsair Air Series™ AF140 Quiet Edition High Airflow" },
        { img: gamingImage8, label: "Cooler Master Hyper 620S Dual Tower ARGB CPU Air Cooler" }
    ],
    school: [
        { img: schoolImage1, label: "Intel Core i3-10100F 10TH Gen Processor" },
        { img: schoolImage2, label: "ASUS GeForce® GT 1030 2GB GDDR5" },
        { img: schoolImage3, label: "Team Elite Vulcan Z 16GB 2x8 3200mHz Gray DDR4 Memory" },
        { img: schoolImage4, label: "MSI Pro H510M-B (LGA 1200) DDR4 Motherboard" },
        { img: schoolImage5, label: "EVGA 500 BR, 80+ BRONZE 500W" },
        { img: schoolImage6, label: "WD Blue™ SN550 NVMe™ SSD-250GB" },
        { img: schoolImage7, label: "PCcooler Corona RGB 120mm Case Fan" },
        { img: schoolImage8, label: "PCcooler GI-UX4 CPU Cooler" }
    ],
    work: [
        { img: workImage1, label: "Intel Core I3-10105 3.7GHZ Comet Lake Quad-Core 10TH Gen Processor" },
        { img: workImage2, label: "ASUS Phoenix GeForce® GTX 1650 4GB GDDR5" },
        { img: workImage3, label: "G.Skill Ripjaws V 16GB Dual DDR4 3200Mhz CL16F4-3200C16D-16GVKB" },
        { img: workImage4, label: "MSI B560M-A PRO Intel 11th Gen mATX Motherboard" },
        { img: workImage5, label: "Cooler Master MWE Bronze 500W" },
        { img: workImage6, label: "Crucial P2 Internal PCIe M.2 2280 SSD" },
        { img: workImage7, label: "PCcooler EF120 ARGB 120mm BLACK Fan" },
        { img: workImage8, label: "PCcooler EX6000 Black Ed CPU COOLER" }
    ],
};