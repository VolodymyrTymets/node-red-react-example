# Node red React app


## About
Node-red complex UI React example 

## Start (Production)

0. Checkout to Release branch
```
git checkout release
```

1. Install package
> First you need install this package as local package for node-red. More details here https://nodered.org/docs/getting-started/adding-nodes

```
cd $HOME/.node-red
npm install <project-path>/<folder-name>
```


2. Run node-red
  
`node-red`


## Start (Dev)

1. Install package
2. Build client code

`npm run start`

3. Run node-red
4. Build your own flow 


## Project structure
```
|_ pallets <- place whree all node-red pallets saved
    |_ apiko-<palletName> 
        |_ icons <- icon of pallet
        |_ ui 
           |_ index.js <- register component for pallets
           |_ build/main.js <- builded pallet teplate code
        |_ apiko-<palletName>.html
        |_ apiko-<palletName>.js 
|_ src
   |_ client/containers <- react components here (paller ui templates)
   |_ server <- all server code here
     |_ pallete-managers <- all code to manage server side of pallet
        |_ <palletName> 
   |_ utils <- code to use on client and server
|_ test
   |_ unit
```

### To Create new Pallet
> first of all read this  https://nodered.org/docs/creating-nodes/

- create pallet files in `pallets/`.
- if you need complex ui create React container in `src/client/containres` and register then in `pallets/<pallet-name>/ui/`.
 Then write name of pallet in `packages.json` -> `build-all` script. 
 > this needed to create separated build for each pallet
- create pallet manager file in `src/server/palet-managers/` to manage server pallet behaviour.
 