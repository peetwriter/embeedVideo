(function (window) {
        var linkToFile = "https://dl.dropboxusercontent.com/u/95756758/Untitled_config.xml";
        var xmlText = readTextFile(linkToFile);

        function setup(TSC) {
             TSC.embedded_config_xml = xmlText;
             TSC.playerConfiguration.addMediaSrc("Untitled.mp4");
             TSC.playerConfiguration.setXMPSrc("Untitled_config.xml");
             
             TSC.playerConfiguration.setAutoHideControls(false);
             TSC.playerConfiguration.setBackgroundColor("#000000");
             TSC.playerConfiguration.setCaptionsEnabled(false);
             TSC.playerConfiguration.setSidebarEnabled(true);
             
             TSC.playerConfiguration.setAutoPlayMedia(false);
             TSC.playerConfiguration.setPosterImageSrc("Untitled_First_Frame.png");
             TSC.playerConfiguration.setIsSearchable(true);
             TSC.playerConfiguration.setEndActionType("stop");
             TSC.playerConfiguration.setEndActionParam("true");
             TSC.playerConfiguration.setAllowRewind(-1);
             

             TSC.localizationStrings.setLanguage(TSC.languageCodes.ENGLISH);
             
             // Uncomment to turn full frame mode on
             //TSC.playerConfiguration.setDisableFullframeMode(false);

             // Uncomment to set custom skin for Flash
             //TSC.playerConfiguration.setConfigurationSrc("skins/configuration_present.xml");

             // Use Fathom service
             //TSC.playerConfiguration.setFathomId("666850b8c609432d8c465dbaab3702a7");

             // Uncomment to see hotspot shapes
             //TSC.playerConfiguration.setDebugHotspot(true);

            // Uncomment to force flash player
            //TSC.playerConfiguration.setForceFlashPlayer(true);

            TSC.mediaPlayer.init("#tscVideoContent");
        }

        function readTextFile(file)
        {  
           var allText = "";
           var rawFile = new XMLHttpRequest();
           rawFile.open("GET", file, false);
           rawFile.onreadystatechange = function ()
           {
              if(rawFile.readyState === 4)
              {
                 if(rawFile.status === 200 || rawFile.status == 0)
                 {
                    allText = rawFile.responseText;
                 }
              }
           }
           rawFile.send(null);
           return allText;
        }

        function loadScript(e,t){if(!e||!(typeof e==="string")){return}var n=document.createElement("script");if(typeof document.attachEvent==="object"){n.onreadystatechange=function(){if(n.readyState==="loaded"){if(t){t()}}}}else{n.onload=function(){if(t){t()}}}n.src=e;document.getElementsByTagName("head")[0].appendChild(n)}

        loadScript('scripts/techsmith-smart-player.min.js', function() {
            setup(window["TSC"]);
        });
}(window));