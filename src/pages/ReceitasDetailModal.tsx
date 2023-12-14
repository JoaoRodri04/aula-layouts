import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg, IonFabButton } from '@ionic/react';

interface ReceitasDetailModalProps {
  itemSelected: Recipe | null;
  onClose: (numero: number, booleano: boolean) => void;
}

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    image: string;
}

const ReceitasDetailModal: React.FC<ReceitasDetailModalProps> = ({ itemSelected, onClose }) => {
  return (
    <IonModal isOpen={itemSelected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{itemSelected?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onClose(1, false)}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{itemSelected?.instructions}</p>
        <IonImg
                src={itemSelected?.image}
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
            <IonFabButton onClick={() => onClose(1, true)}>Receita feita</IonFabButton>
      </IonContent>
    </IonModal>
  );
};

export default ReceitasDetailModal;