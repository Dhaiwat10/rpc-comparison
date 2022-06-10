# RPC comparison

A simple app that compares the RPC performance in terms of latency for Ankr, Alchemy and Infura. The current version of the app pings the `eth_getBlockNumber` endpoint for the Ethereum mainnet RPCs.

You can verify these results in your browser's network tab. The
response times showing up on this page currently are a bit slower than
they actually are, but they are slower for all three providers so this
still gives you an accurate picture about the order of the providers
in terms of speed. Working on a fix!

## Todo

- [x] Create an Infura account
- [x] Create an Alchemy account
- [ ] Create a Quicknode account (not a priority since it's paid)
- [ ] Get access to a premium Ankr account (again, not a priority but would be nice to have a level playing field since all other providers are paid or require an account)
- [x] Setup some functions that ping the RPCs on different endpoints and return the results
- [x] Create a table that compares the results
- [ ] Fix the response time calcuating logic. All response times calculated with the current logic are showing up a bit slower than they actually are.
- [ ] For some reason there are multiple requests going through instead of just one. Figure out why.
