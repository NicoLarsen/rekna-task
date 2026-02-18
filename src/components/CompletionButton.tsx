import { Box, Text, Tooltip } from '@chakra-ui/react';

interface CompletionButtonProps {
  percentage: number;
  isClickable: boolean;
  onClick: () => void;
}

export default function CompletionButton({ percentage, isClickable, onClick }: CompletionButtonProps) {
  const roundedPercentage = Math.round(percentage);

  // Color based on completion
  const getBgColor = () => {
    if (roundedPercentage === 0) return '#4A5568'; // gray.600
    if (roundedPercentage === 100) return isClickable ? '#4DB88A' : '#3E9E72';
    if (roundedPercentage >= 75) return '#C49B3E';
    if (roundedPercentage >= 50) return '#C4803E';
    return '#C45555';
  };

  const tooltipLabel = isClickable
    ? 'Click to move to Done phase'
    : `${roundedPercentage}% of tasks completed`;

  return (
    <Tooltip label={tooltipLabel} placement="top" hasArrow fontSize="sm" bg="gray.700" color="white">
      <Box
        px={2}
        h="28px"
        minW="50px"
        borderRadius="full"
        bg={getBgColor()}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize="xs"
        fontWeight="bold"
        cursor={isClickable ? 'pointer' : 'default'}
        _hover={isClickable ? { transform: 'scale(1.05)', opacity: 0.9 } : {}}
        transition="all 0.15s"
        onClick={isClickable ? onClick : undefined}
      >
        <Text>{roundedPercentage}%</Text>
      </Box>
    </Tooltip>
  );
}
