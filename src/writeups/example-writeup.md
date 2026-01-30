---
layout: layout.njk
title: Write-up XSS & SQL Injection
---
# Write-up : Failles XSS et SQL Injection

## Analyses & Recherches

Je documente ici mes apprentissages autour de la sécurité applicative, dans un cadre **pédagogique, légal et contrôlé**.  
L’objectif est de comprendre comment fonctionnent les vulnérabilités afin de mieux les **identifier**, les **analyser** et surtout les **corriger**.

Je m’intéresse principalement à :
- les vulnérabilités web les plus courantes,
- les mécanismes techniques derrière les attaques,
- les bonnes pratiques de sécurisation côté serveur et client.

---

## 1. Faille XSS (Cross-Site Scripting)

La faille **XSS** permet à un attaquant d’injecter du code JavaScript malveillant dans une page web consultée par d’autres utilisateurs.  
Elle affecte principalement le **front-end**, mais ses causes sont presque toujours liées à une mauvaise validation des entrées côté serveur.

### Types de XSS

#### ● XSS Reflected
Le script injecté est renvoyé immédiatement dans la réponse HTTP (paramètres d’URL, champs de formulaire).

#### ● XSS Stored
Le code malveillant est stocké (base de données, commentaires, profils) et exécuté à chaque affichage.

#### ● XSS DOM-based
La vulnérabilité se situe uniquement côté JavaScript, sans interaction directe avec le serveur.

### Impacts possibles
- Vol de cookies de session
- Usurpation de compte
- Défaçage de pages
- Redirections malveillantes

### Prévention
- Échapper systématiquement les sorties HTML
- Utiliser des frameworks sécurisés
- Mettre en place une Content Security Policy (CSP)

---

## 2. Faille SQL Injection (SQLi)

La **SQL Injection** est une vulnérabilité côté serveur permettant de manipuler des requêtes SQL via des entrées utilisateur mal filtrées.  
Elle peut entraîner la **fuite**, la **modification** ou la **destruction** de données.

Ci-dessous, une classification des SQLi **du plus simple au plus complexe**.

---

### 2.1 Injection de base (Simple String Injection)

**Description**  
Forme la plus simple de SQLi. L’attaquant injecte directement du code SQL dans une entrée utilisateur non protégée.

**Principe**  
La logique de la requête est modifiée et retourne des résultats inattendus.

**Complexité**  
Faible — très fréquente sur les applications mal sécurisées.

---

### 2.2 Injection UNION-based

**Description**  
Utilisation de l’opérateur `UNION` pour combiner la requête initiale avec une autre requête malveillante.

**Principe**  
Les colonnes doivent correspondre en nombre et en type pour fonctionner.

**Complexité**  
Moyenne — nécessite une compréhension du schéma de la base de données.

---

### 2.3 Injection Error-based

**Description**  
Exploitation des messages d’erreur SQL pour récupérer des informations sensibles.

**Principe**  
Les erreurs peuvent révéler les noms de tables, de colonnes ou le type de SGBD.

**Complexité**  
Moyenne — dépend de la configuration serveur.

---

### 2.4 Injection Blind (Boolean-based)

**Description**  
Aucune donnée n’est affichée directement. L’attaquant déduit les informations via des conditions vraies ou fausses.

**Principe**  
Analyse des différences de comportement de l’application.

**Complexité**  
Élevée — nécessite des tests répétés et une logique conditionnelle.

---

### 2.5 Injection Blind (Time-based)

**Description**  
Variante du blind SQLi utilisant le temps de réponse comme canal d’information.

**Principe**  
Un délai indique si une condition est vraie ou fausse.

**Complexité**  
Très élevée — attaques lentes et sensibles à la latence réseau.

---

### 2.6 Injection Out-of-Band

**Description**  
Exfiltration de données via un canal externe (DNS, HTTP, SMB).

**Principe**  
Utilisée lorsque les réponses classiques sont bloquées.

**Complexité**  
Très élevée — dépend de l’environnement réseau.

---

### 2.7 Injection Stacked Queries

**Description**  
Possibilité d’exécuter plusieurs requêtes SQL en une seule injection.

**Principe**  
Peut entraîner des actions destructrices si le backend l’autorise.

**Complexité**  
Très élevée — souvent bloquée par défaut.

---

### 2.8 Injection Second-order

**Description**  
L’injection ne se déclenche pas immédiatement mais plus tard via des données stockées.

**Principe**  
La charge malveillante est persistante et exploitée dans un autre contexte.

**Complexité**  
Extrêmement élevée — nécessite une compréhension globale de l’application.

---

## 3. Bonnes pratiques de protection

- Utilisation de **requêtes préparées**
- Validation stricte des entrées utilisateur
- Principe du moindre privilège
- Désactivation des erreurs SQL en production
- Mise en place de WAF (Web Application Firewall)

---

## Conclusion

Les failles **XSS** et **SQL Injection** font partie des vulnérabilités web les plus connues, mais aussi des plus exploitées.  
Les comprendre est indispensable pour tout développeur ou futur professionnel de la cybersécurité.

Ce write-up s’inscrit dans une démarche d’apprentissage continu et de bonnes pratiques de sécurité applicative.
