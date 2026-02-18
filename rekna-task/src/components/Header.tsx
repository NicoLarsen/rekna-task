import { Box, Button, HStack, IconButton, Text, Spinner, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPlural, formatText } from '../i18n/translations';

interface HeaderProps {
  monthDisplay: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onCreateTasks: () => void;
  isCreating: boolean;
  categoryExpanded: Record<string, boolean>;
  onToggleCategory: (category: string) => void;
  missingTaskCount: number;
  isTransitioning: boolean;
}

export default function Header({
  monthDisplay,
  onPrevMonth,
  onNextMonth,
  onCreateTasks,
  isCreating,
  categoryExpanded: _categoryExpanded,
  onToggleCategory: _onToggleCategory,
  missingTaskCount,
  isTransitioning,
}: HeaderProps) {
  const { t, language } = useLanguage();

  return (
    <HStack px={4} py={2} justify="space-between" flexWrap="wrap" gap={2} align="center">
      {/* Logo + Language Selector */}
      <HStack spacing={3}>
        <Image src="./rekna-logo.png" alt="Rekna logo" h="48px" w="auto" />
        <LanguageSelector />
      </HStack>


      {/* Month navigation */}
      <HStack spacing={1}>
        <IconButton
          icon={<ChevronLeftIcon boxSize={5} />}
          aria-label="Previous month"
          onClick={onPrevMonth}
          variant="ghost"
          size="sm"
          isDisabled={isTransitioning}
        />
        <Box minW="140px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
          {isTransitioning ? (
            <Spinner size="sm" />
          ) : (
            <Text fontWeight="bold">{monthDisplay}</Text>
          )}
        </Box>
        <IconButton
          icon={<ChevronRightIcon boxSize={5} />}
          aria-label="Next month"
          onClick={onNextMonth}
          variant="ghost"
          size="sm"
          isDisabled={isTransitioning}
        />
      </HStack>

      {/* Legend + create button */}
      <HStack spacing={4}>
        <HStack spacing={3}>
          <HStack spacing={1}>
            <Box w="16px" h="16px" borderRadius="full" bg="#C45555" display="flex" alignItems="center" justifyContent="center" color="white" fontSize="8px" fontWeight="bold">✕</Box>
            <Text fontSize="xs">{t.ui.toDo}</Text>
          </HStack>
          <HStack spacing={1}>
            <Box w="16px" h="16px" borderRadius="full" bg="#C49B3E" display="flex" alignItems="center" justifyContent="center" color="white" fontSize="8px" fontWeight="bold">✎</Box>
            <Text fontSize="xs">{t.ui.doing}</Text>
          </HStack>
          <HStack spacing={1}>
            <Box w="16px" h="16px" borderRadius="full" bg="#4DB88A" display="flex" alignItems="center" justifyContent="center" color="white" fontSize="8px" fontWeight="bold">✓</Box>
            <Text fontSize="xs">{t.ui.done}</Text>
          </HStack>
          <HStack spacing={1}>
            <Box w="16px" h="16px" borderRadius="full" bg="gray.600" display="flex" alignItems="center" justifyContent="center" color="gray.400" fontSize="10px" fontWeight="bold">−</Box>
            <Text fontSize="xs">{t.ui.notApplicable}</Text>
          </HStack>
        </HStack>

        <Button
          bg={isCreating ? '#C45555' : '#4DB88A'}
          color="white"
          _hover={{ opacity: 0.85 }}
          _active={{ opacity: 0.7 }}
          _disabled={{ opacity: 0.4, cursor: 'not-allowed' }}
          size="sm"
          onClick={onCreateTasks}
          isDisabled={!isCreating && missingTaskCount === 0}
        >
          {isCreating
            ? t.ui.stop
            : missingTaskCount > 0
              ? formatPlural(formatText(t.ui.createMissingTasks, { count: missingTaskCount }), missingTaskCount, language)
              : t.ui.allTasksCreated}
        </Button>
      </HStack>
    </HStack>
  );
}
