#

## Jak rozpocząć

Aby zacząć pracę z projektem, musisz sklonować je z GitHub i zainstalować wszystkie niezbędne paczki.

### Klonowanie repozytorium

git clone https://github.com/<twoja_nazwa_uzytkownika>/<nazwa_repozytorium>.git

cd <nazwa_repozytorium>

### Instalacja zależności

Aby zainstalować paczki, uruchom:

npm install

### Uruchamianie projektu

npm run dev

Projekt będzie dostępny pod adresem [http://localhost:5173](http://localhost:5173).

### Uruchamianie testów

npm run test


## Struktura projektu

- `src/components`: Katalog dla komponentów React używanych w projekcie.
- `src/context`: Tutaj znajduje się logika Context API używana do zarządzania stanem.

### Pliki

- `ContextProvider.tsx`: Zawiera logikę Context API dla zarządzania stanem.
- `FetchPost.tsx`: Komponent do pobierania i wyświetlania postów.
- `Post.tsx`: Komponent postu.
- `Button.tsx`, `Loader.tsx`: Proste komponenty UI.

## Co bym zrobił inaczej

- **Zmiana struktury**: Lepsze podzielenie projektu na katalogi `pages`, `components`, `views` itp., aby ułatwić nawigację i zarządzanie kodem.
- **Stylowanie**: Zamiast zwykłych plików CSS, użyłbym SCSS Modules, styled-components lub Tailwind CSS dla lepszego zarządzania stylami i modularności.
- **Zarządzanie stanem**: Zastąpienie Context API przez bardziej zaawansowane rozwiązanie takie jak Redux, aby lepiej zarządzać stanem w większych aplikacjach.
- **Pobieranie danych**: Użycie biblioteki takiej jak React Query do obsługi operacji asynchronicznych i zarządzania stanem danych pobranych z API, co ułatwiłoby cache'owanie i synchronizację stanu.




