import { Box, Button, HStack } from '@chakra-ui/react';

interface ActionFABsProps {
  visible: boolean;
  onConfirm: () => void;
  onDiscard: () => void;
  isSaving: boolean;
  changeCount: number;
}

export default function ActionFABs({ visible, onConfirm, onDiscard, isSaving, changeCount }: ActionFABsProps) {
  if (!visible) return null;

  return (
    <Box
      position="fixed"
      bottom="24px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={100}
      p={3}
    >
      <HStack spacing={3}>
        <Button colorScheme="gray" onClick={onDiscard} isDisabled={isSaving}>
          Discard
        </Button>
        <Button bg="#4DB88A" color="white" _hover={{ opacity: 0.85 }} _active={{ opacity: 0.7 }} onClick={onConfirm} isLoading={isSaving} loadingText="Saving...">
          Confirm ({changeCount})
        </Button>
      </HStack>
    </Box>
  );
}
