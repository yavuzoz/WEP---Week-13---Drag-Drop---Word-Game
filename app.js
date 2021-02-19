/**
 * OYUN AKISI:
 * - Oyun basladiginda Random olarak hecelerine ayrilmis bir kelime gelecek. Minimum 10 Kelimelik bir oyun uretiniz.  
 *      - 'Random' butonu tiklandiginda hecelerine karisik olarak ayrilmis bir kelime gelecek.
 * - Heceler Drag & Drop yontemi ile anlamli olarak sirlanacak
 * - Siralama bitirildiginde kullanici olusan kelimeyi check edecek ve "DOGRU"  veya ''YANLIS" mesaji alacak. 
 *      - 'Check' butonu tiklandiginda kelimenin dogru veya yanlisligi kontrol edilecek.
 * 
 * Teknik Analiz:
 * 1) Sayfanin komponentlerini html üzerinden static olarak olusturmam lazim
 * 2) Bu komponentleri dinamik hale getirmem lazim
 * 3) 10 kelimelik bir array olusturmam gerekiyor
 * 4) Rastgele bir kelime secmem lazim
 * 5) Secilen kelimeyi hecelerine ayiran fonksiyonu yazmam gerkiyor.
 *      5.1) Heceleri karistirarak ekrana yazmam gerekiyor.
 * 6) Drag&Drop özellige ile kullaniciya sectigi heceleri siralama imkani vermem lazim
 * 7) Siralanan keliemleri ondragend olayi esnasinda bir sonuc arrayine eklemem lazim
 * 8) Kullanici kelimeyi kontrol etmek istediginde olusturulan kelime ile (rastgele) secili olan kelimeyi karsilastirmam gerekiyor.
 * 9) Kalite kontrol yap (programi ac ve her türlü durumu test et).
 */

refreshUI(userWordArray);


