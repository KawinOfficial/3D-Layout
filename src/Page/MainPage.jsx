import React, { useState } from "react";
import Layout from "../components/layout";

import {
  Text,
  Checkbox,
  Switch,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const mainOption = [
  { main: "Overview", option: ["Pipe", "Pipekit", "Compart"] },
  { main: "Display", option: ["Fullsceern", "Background", "Text"] },
];

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

export default function MainPage() {
  const [pipe, setPipe] = useState(true);
  const [pipekit, setPipekit] = useState(false);
  const [compart, setCompart] = useState(false);

  const [background, setBackground] = useState(true);
  const [text, setText] = useState(true);

  var chkBox = [pipe, pipekit, compart, false, background, text];

  const handleCheck = (option) => {
    return option == "Pipe"
      ? setPipe(!pipe)
      : option == "Pipekit"
      ? setPipekit(!pipekit)
      : option == "Compart"
      ? setCompart(!compart)
      : option == "Fullsceern"
      ? toggleFullScreen()
      : option == "Background"
      ? setBackground(!background)
      : option == "Text"
      ? setText(!text)
      : "";
  };

  return (
    <>
      {/* ChkBox */}
      <Box display="flex" justifyContent="end">
        <Box zIndex={1} position="absolute" width="12%">
          <Box
            background="whiteAlpha.900"
            margin={3}
            padding={1}
            rounded="2xl"
            shadow="xl"
          >
            <Accordion allowToggle>
              <AccordionItem fontSize="small" border="none">
                <AccordionButton
                  rounded="xl"
                  py={1}
                  _expanded={{ bg: "teal.200" }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="small"
                  >
                    SETTINGS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel p={0}>
                  <Accordion allowToggle>
                    {mainOption.map((info, i) => (
                      <AccordionItem fontSize="sm" border="none" key={i} pb={1}>
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton rounded="xl" py={1}>
                              {/* Main */}
                              <Box
                                flex="1"
                                textAlign="left"
                                fontWeight="bold"
                                fontSize="sm"
                              >
                                {info.main}
                              </Box>

                              {/* Icon */}
                              {isExpanded ? (
                                <MinusIcon fontSize={11} mr={1} />
                              ) : (
                                <AddIcon fontSize={11} mr={1} />
                              )}
                            </AccordionButton>

                            {/* Option */}
                            {info.option.map((options, j) => (
                              <AccordionPanel pb={0} key={j} mx={5}>
                                <Checkbox
                                  colorScheme="green"
                                  size="sm"
                                  value={options}
                                  borderColor="black"
                                  defaultChecked={
                                    i === 0 ? chkBox[j] : chkBox[j + 3]
                                  }
                                  onChange={() => handleCheck(options)}
                                >
                                  {options}
                                </Checkbox>
                              </AccordionPanel>
                            ))}
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>

      {/* 3D Layout */}
      <Layout chkBox={chkBox} />
    </>
  );
}
