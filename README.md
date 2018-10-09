[Demo](https://build-enaxjxnlhc.now.sh/)

**Serwer https://shibe.online/ nie zwraca nagłówka HTTP  `Access-Control-Allow-Origin`, przez co odwołania do API muszą być puszczone przez proxy (https://cors-anywhere.herokuapp.com/).**


# Zadanie:
Stworzenie aplikacji w React, której celem jest pobieranie i wyświetlanie zdjęć zwierząt określonego typu.
1.  Ekran główny wyświetlający forumarz z następującymi polami:

    a. Ilość zdjęć - pole typu numerycznegi, wymagane, poprawna wartość misu mieścić się w przedziale od 1 do 10.
    
    b. Typ zwierzaka - Lista rozwijana, wymagana, dostępne wartości to : shibes (psy), cats (koty), birds (ptaki), random (losowe)
    
    c. Przycisk do wysyłania formularza "szukaj"
    
2. Po wysłaniu formularza należy zebrać dane i wysłaćje do otwartego API ze zdjęciami. Otrzymaną listę zdjęć wyświetlić pod formularzem.
    W przypadku gdy użytkownik wybrał opcję "random" wylosować dowolny z typów.
    
3. W trakcie oczekiwania na odpowiedź serwera należy zablokować przycisk i zmienić jego treść na "ładowanie danych".

4. Ponowne wysłanie formularza czyści poprzednio zaciągnięte zdjęcia i wyświetla nowe.

Formularz powinien zostać zbudowany jako osobny komponent, który przyjmuje stan danych i informuje o zmianach swojego rodzica.
