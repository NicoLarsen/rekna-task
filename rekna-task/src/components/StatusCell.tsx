import { Box } from '@chakra-ui/react';

interface StatusCellProps {
  status: string | null;
  isApplicable: boolean;
  isChanged: boolean;
  hasActivity: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  categoryColor?: string;
}

export default function StatusCell({ status, isApplicable, isChanged: _isChanged, hasActivity, onClick, onMouseEnter, onMouseLeave, categoryColor }: StatusCellProps) {
  // N/A - task not applicable for this company (checkbox unchecked)
  if (!isApplicable) {
    return (
      <Box
        w="32px" h="32px" borderRadius="full"
        bg="gray.700"
        display="flex" alignItems="center" justifyContent="center"
        color="gray.500" fontSize="md" fontWeight="bold"
        mx="auto"
      >
        −
      </Box>
    );
  }

  // Task applicable but no activity created yet - dashed circle (not clickable)
  if (!hasActivity) {
    return (
      <Box
        w="32px" h="32px" borderRadius="full"
        border="2px dashed" borderColor="gray.600"
        bg="gray.800"
        mx="auto"
        title="Task not created yet - click 'Create Monthly Tasks' button"
      />
    );
  }

  // N/A status - task not relevant for this month (set automatically, not clickable)
  if (status === 'N/A') {
    return (
      <Box
        w="32px" h="32px" borderRadius="full"
        bg="#718096"
        display="flex" alignItems="center" justifyContent="center"
        color="white" fontSize="md" fontWeight="bold"
        mx="auto"
      >
        −
      </Box>
    );
  }

  // Activity exists but no status - treat as empty clickable
  if (!status) {
    return (
      <Box
        w="32px" h="32px" borderRadius="full"
        border="2px solid" borderColor="gray.500"
        display="flex" alignItems="center" justifyContent="center"
        cursor="pointer" mx="auto"
        _hover={{ borderColor: 'gray.300', transform: 'scale(1.1)' }}
        transition="all 0.1s"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        title="Click to set status"
      />
    );
  }

  const configs: Record<string, { bg: string; icon: string }> = {
    'To Do': { bg: '#C45555', icon: '✕' },
    'Doing': { bg: '#C49B3E', icon: '✎' },
    'Done': { bg: '#4DB88A', icon: '✓' },
    'N/A': { bg: '#718096', icon: '−' },
  };

  const config = configs[status] || configs['To Do'];

  return (
    <Box
      w="32px" h="32px" borderRadius="full"
      bg={config.bg}
      border={categoryColor ? '1px solid' : 'none'}
      borderColor={categoryColor}
      display="flex" alignItems="center" justifyContent="center"
      color="#2D3748" fontSize="sm" fontWeight="bold"
      cursor="pointer" mx="auto"
      _hover={{ opacity: 0.85, transform: 'scale(1.1)' }}
      transition="all 0.1s"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {config.icon}
    </Box>
  );
}
