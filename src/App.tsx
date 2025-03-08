import "./App.css";
import { Box, useDisclosure } from "@chakra-ui/react";
//import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";

function App() {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {}}>Open Modal</button>
        {/* <MyModal isOpen={open} close={onClose}>
          <h2>Modal</h2>
        </MyModal> */}
      </div>
    </>
  );
}

export default App;

// const MyModal = ({
//   isOpen,
//   close,
//   children,
// }: {
//   isOpen: boolean;
//   close: () => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <Modal isOpen={isOpen} onClose={close} isCentered closeOnOverlayClick>
//       <ModalOverlay />
//       <ModalContent
//         mt="75px"
//         h="calc(100vh - 75px)"
//         w="100%"
//         maxW="100%"
//         borderRadius={0}
//         background="none"
//         onKeyDown={(event) => {
//           event.stopPropagation(); // 親への伝搬を防ぐ
//         }}
//       >
//         <Box px="4rem" pl="48px" pr="48px" pt="32px">
//           <Box flexGrow={1} bg="white" minWidth="936px" w="100%">
//             {children}
//           </Box>
//         </Box>
//       </ModalContent>
//     </Modal>
//   );
// };
