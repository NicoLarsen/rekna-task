import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

interface CreatingTasksSpinnerProps {
  visible: boolean;
}

export default function CreatingTasksSpinner({ visible }: CreatingTasksSpinnerProps) {
  if (!visible) return null;

  return (
    <Box
      position="fixed"
      bottom="24px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={100}
      p={4}
      bg="gray.700"
      borderRadius="md"
      boxShadow="lg"
    >
      <VStack spacing={3}>
        <Spinner size="lg" color="green.500" thickness="4px" />
        <Text fontSize="md" fontWeight="medium">
          Creating tasks...
        </Text>
        <Text fontSize="sm" color="gray.400">
          Please keep the app open
        </Text>
      </VStack>
    </Box>
  );
}
