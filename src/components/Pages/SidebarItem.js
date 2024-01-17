import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SidebarItem({item}){
    
    var clickedItem;
    const [open, setOpen] = useState(false);
     const [state, setState] = useState([]);
    
function doThis(data, event) {

    if(clickedItem === '101-file-compression'){          
        window.open('https://aim-pact-dev.intel.com/fileCompression/','_blank');
    }
    
    if(clickedItem === '102-navigation'){
         window.open('https://aim-pact-dev.intel.com/navigation/','_blank');
    }

    if(clickedItem === '103-html5-browser'){
        window.open('https://aim-pact-dev.intel.com/htmlBrowser/','_blank');
    }

    if(clickedItem === '104-pdf-renderer'){
        window.open('https://aim-pact-dev.intel.com/pdfRenderer/','_blank');
    }

    if(data === '105-photo-library'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7BFFD78803-66D4-46E5-AB0D-71E3218766B7%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/photoLibrary/','_blank');
        } 
        
    }

    if(data === '201-clang'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7B46EDACC2-C6C3-4E56-81D7-D8801BEC6E60%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/clang/','_blank');
        }         
    }

    if(data === '202-text-processing'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7BA6983927-10CD-44DE-8462-7A2904B57977%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/textProcessing/','_blank');
        } 
        
    }

    if(data === '203-asset-compression'){
        
        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7BA3DA71B3-0D15-40CF-8589-E7028C1D28CE%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/assetCompression/','_blank');
        } 
        
    }

    if(data === '301-object-detection'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7BA914724E-C7A6-416E-8B99-450251BAA576%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/objectDetection/','_blank');
        } 
        
    }

    if(data === '302-background-blur'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7B99CC8123-2710-4505-BD6D-01B57CC93873%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/backgroundBlur/','_blank');
        } 
        
    }

    if(data === '401-horizon-detection'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7BDF70E202-6B3D-45A5-B816-1E23F691B27F%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/horizonDetection/','_blank');
        } 
        
    }

    if(data === '402-object-remover'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7BCE615302-3FB8-4F46-AFC8-4A83011BF9C7%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/objectRemover/','_blank');
        } 
        
    }

    if(data === '403-hdr'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7B55B1E090-7CDD-478C-91C6-3A23A78FF151%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/hdr/','_blank');
        } 
        
    }

    if(data === '404-photo-filter'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7B88212EB1-5F36-4940-9691-B7573E809663%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/photoFilter/','_blank');
        } 
        
    }

    if(data === '501-ray-tracer'){

        if(clickedItem === 'Silicon'){
        window.open('https://intel-my.sharepoint.com/:x:/r/personal/harshad_navale_intel_com/_layouts/15/Doc.aspx?sourcedoc=%7B07FBB886-991A-449C-B731-2FB81D6ED1F3%7D&file=summary.xlsx&action=default&mobileredirect=true','_blank');
        }
        if (clickedItem === 'uArch'){
        window.open('https://aim-pact-dev.intel.com/rayTracer/','_blank');
        } 
       
    }

    if(clickedItem === '502-structure-from-motion'){
        window.open('https://aim-pact-dev.intel.com/structureFromMotion/','_blank');        
    }  
}

function handleClick (event) {
    console.log("clicked Item", event.target.innerHTML);
    clickedItem = event.target.innerHTML;
    localStorage.setItem('clickedVar', clickedItem);
  };


    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span >                       
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content" onClick={() => doThis(item.title)}>
                    { 
                    item.childrens.map(
                        (child) =>
                        <div onClick={child => handleClick(child)}>
                            <SidebarItem  item={child}  />                             
                        </div>) 
                    }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">                
                {item.title}
            </a>
        )
    }  
}