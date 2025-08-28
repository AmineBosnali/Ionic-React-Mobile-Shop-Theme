import React, { useState } from 'react';
import { IonItem, IonInput, IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: CustomEvent) => {
    const input = e.detail.value as string;
    setValue(input);
    onSearch(input);
  };

  return (
    <IonItem
      lines="none"
      className="searchInput"
    >
      <IonInput
        value={value}
        placeholder={placeholder}
        onIonChange={handleChange}
      />
      <IonIcon icon={searchOutline} slot="end" />
    </IonItem>
  );
};

export default SearchBar;
